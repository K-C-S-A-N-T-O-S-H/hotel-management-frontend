import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Box, Typography } from "@mui/material";

import { DropAndDragInterface } from "./type";

const DragAndDropFile: React.FC<DropAndDragInterface> = ({ handleChange }) => {
    const onDrop = useCallback((file: any) => {
        handleChange?.(file);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <Box
            {...getRootProps()}
            p={5}
            border={isDragActive ? "1px dashed #aaa" : "1px dashed #ccc"}
            bgcolor={isDragActive ? "grey.200" : "transparent"}
        >
            <input {...getInputProps()} type="file" />
            {isDragActive ? (
                <Typography>Drop the files here...</Typography>
            ) : (
                <Typography>Drag and drop files here, or click to select files</Typography>
            )}
        </Box>
    );
};

export default DragAndDropFile;
