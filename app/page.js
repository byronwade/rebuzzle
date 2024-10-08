"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag";
import { usePathname } from "next/navigation";
import { sendEmail } from "@/lib/sendEmail"; // Adjust the path as needed

function Home() {
	const gameVersion = "No. 0005";
	const pathname = usePathname();

	useEffect(() => {
		trackEvent({
			action: "page_view",
			category: "Page",
			label: pathname,
		});
	}, [pathname]);

	const handleButtonClick = (action, label) => {
		trackEvent({
			action: action,
			category: "Button",
			label: label,
		});
	};

	const sendTestEmail = async () => {
		try {
			await sendEmail("welcome", {
				to: "bce1995@gmail.com",
				subject: "Welcome to EmailMeWork!",
				firstName: "Byron",
				lastName: "Wade",
				username: "testuser",
			});
			alert("Test email sent successfully!");
		} catch (error) {
			console.error("Error sending test email:", error);
			alert("Failed to send test email.");
		}
	};

	return (
		<>
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h1 className="text-6xl font-bold">Rebuzzle</h1>
					<p className="text-gray-500 mb-4">Rebus Puzzles</p>
					<p className="text-lg mb-8">Unravel the Picture, Reveal the Phrase!</p>
					<div className="space-x-4">
						<Link href="/rebus?guest=true">
							<Button variant="brand" onClick={() => handleButtonClick("click", "Play as Guest")}>
								Play as Guest
							</Button>
						</Link>
						<Link href="/login">
							<Button onClick={() => handleButtonClick("click", "Play Logged In")}>Play Logged In</Button>
						</Link>
					</div>
					<div className="space-x-4 mt-4">
						<Link href="/signup">
							<Button variant="secondary" onClick={() => handleButtonClick("click", "Signup")}>
								Signup
							</Button>
						</Link>
					</div>
					{/* <div className="space-x-4 mt-4">
						<Button variant="secondary" onClick={sendTestEmail}>
							Send Test Email
						</Button>
					</div> */}
					<p className="text-gray-500 mt-4">{gameVersion}</p>
					<p className="text-gray-500 mt-4">Made By Byron Wade</p>
				</div>
			</div>
		</>
	);
}

export default Home;