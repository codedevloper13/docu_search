/** @format */

"use client";

import { uploadToS3 } from "@/lib/Amazon-s3";
import { Inbox } from "lucide-react";
import React from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			"application/pdf": [".pdf"],
			"application/msword": [".doc"],
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
		},
		maxFiles: 1,
		onDrop: async (acceptedFiles) => {
			console.log(acceptedFiles);
			const file = acceptedFiles[0];
			if (file.size > 20 * 1024 * 1024) {
				alert(`Please upload Below ${file.size}`);
				return;
			}
			try {
				const data = await uploadToS3(file);
				console.log("data", data);
			} catch (error) {
				console.log("oops");
			}
		},
	});
	return (
		<>
			<div className='p-2 bg-white rounded-xl'>
				<div
					{...getRootProps()}
					className='border-dashed border-2 border-orange-400  rounded-xl cursor-pointer bg-green-50 p-8 flex justify-center items-center flex-col'>
					<input {...getInputProps()} />
					<Inbox className='w-10 h-10 text-orange-300' />
					<p className=' mt-2 text-sm text-slate-400'>Drag 'n' drop some files here, or click to select files</p>
				</div>
			</div>
		</>
	);
};

export default FileUpload;
