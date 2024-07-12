import { useState } from "react";
import { InfoCircledIcon, GearIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useContext } from "react";
import GameContext from "@/context/GameContext";
import CustomDialog from "@/components/CustomDialog";
import Image from "next/image";

// Component for "How to Play" dialog content
const HowToPlayContent = () => {
	return (
		<div>
			<h2 className="text-xl font-bold">How to Play</h2>
			<p className="mt-2">Rebuzzle is a daily rebus puzzle game where you solve puzzles using clues. You have a limited number of attempts to guess the correct answer. The next puzzle will be available after the countdown ends. Good luck and have fun!</p>
			<Image src="/vercel.svg" alt="Example" className="mt-4" width={40} height={40} />
			{/* Add more content here as needed */}
		</div>
	);
};

// Component for "Settings" dialog content
const SettingsContent = () => {
	return (
		<div>
			<h2 className="text-xl font-bold">Settings</h2>
			<p className="mt-2">Here you can configure your game settings and preferences.</p>
			{/* Add settings options here */}
		</div>
	);
};

export default function Header() {
	const { attemptsLeft, countdown } = useContext(GameContext);
	const [howToPlayDialogOpen, setHowToPlayDialogOpen] = useState(false);
	const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);

	const handleHowToPlayDialogOpen = () => {
		setHowToPlayDialogOpen(true);
	};

	const handleSettingsDialogOpen = () => {
		setSettingsDialogOpen(true);
	};

	return (
		<>
			<div className="relative flex justify-between container mx-auto p-4">
				<div>
					<Link href="/" className="flex items-center space-x-4 font-bold text-2xl">
						Rebuzzle
					</Link>
					<p className="text-xs text-gray-500">Daily rebus puzzle games</p>
				</div>
				<div className="hidden md:flex space-x-8 items-center font-bold">
					<div>
						<p>Next puzzle available in: {countdown}</p>
					</div>
					<div>
						<span className="p-2 bg-black rounded-full text-white">{attemptsLeft}</span>
					</div>
					<button onClick={handleHowToPlayDialogOpen} aria-label="How to Play">
						<InfoCircledIcon className="w-7 h-7" />
					</button>
					<button onClick={handleSettingsDialogOpen} aria-label="Settings">
						<GearIcon className="w-7 h-7" />
					</button>
				</div>
			</div>
			<CustomDialog open={howToPlayDialogOpen} onOpenChange={setHowToPlayDialogOpen}>
				<HowToPlayContent />
			</CustomDialog>
			<CustomDialog open={settingsDialogOpen} onOpenChange={setSettingsDialogOpen}>
				<SettingsContent />
			</CustomDialog>
		</>
	);
}
