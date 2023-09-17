/** @format */

import "./global.css";
import type { Metadata } from "next";
import { Montserrat, Rokkitt } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DocuSearch",
	description:
		"DocuSearch AI: Explore, Discover, Answer is a cutting-edge, AI-powered document analysis and retrieval system designed to revolutionize the way you interact with text documents. With DocuSearch AI, you can seamlessly unlock the wealth of information hidden within your PDFs and DOC files",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={montserrat.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
