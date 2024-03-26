import React from "react";

import { Box, Button, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { handleModel } from "../../redux/Reducers/GlobalReducers";
import DailogBox from "../Dailog";

import { ModalButtonProps } from "./types";

const ModalButtons: React.FC<ModalButtonProps> = ({
    okText,
    cancelText = "Cancel",
    deleteText,
    disableDelete,
    disableOkBtn,
    deleteAlertText,
    cancelAlertText,
    onDelete,
    onCancel,
    loading = false,
    disableCancel = false,
    onOk
}) => {
    const [confirm, setConfirm] = React.useState(false);
    const dispatch = useAppDispatch();
    const { breakPoints } = useAppSelector((state) => state);
    const onClose = () => setConfirm(false);
    const onOpen = () => setConfirm(true);
    const [cancel, setCancel] = React.useState(false);
    const handleCancel = () => {
        if (cancel) {
            onCancel?.();
            setCancel(false);
        } else {
            setCancel(true);
        }
    };
    return (
        <>
            <Box
                component="div"
                marginTop={1.5}
                marginBottom={2}
                display="flex"
                flexDirection={breakPoints.lg ? "row" : "column-reverse"}
                gap={1}
                width="100%"
            >
                {deleteText && (
                    <Box
                        component="div"
                        display="flex"
                        justifyContent="start"
                        gap={2}
                        flexDirection={breakPoints.lg ? "row" : "column-reverse"}
                        width="100%"
                    >
                        <Button disabled={disableDelete || loading} type="button" variant="outlined" onClick={deleteAlertText ? onOpen : onDelete}>
                            {deleteText}
                        </Button>
                    </Box>
                )}
                <Box
                    component="div"
                    display="flex"
                    justifyContent="end"
                    gap={1}
                    flexDirection={breakPoints.lg ? "row" : "column-reverse"}
                    width="100%"
                >
                    {!disableCancel && (
                        <Button
                            variant="elevated"
                            disabled={loading}
                            onClick={() => (cancelAlertText ? handleCancel() : onCancel ? onCancel() : dispatch(handleModel({ open: false })))}
                        >
                            {cancelText}
                        </Button>
                    )}
                    <Button disabled={disableOkBtn || loading} type="submit" variant="filled" onClick={() => onOk?.()}>
                        {okText}
                    </Button>
                </Box>
            </Box>
            {/* delete Alert Box */}
            <DailogBox title="Confirm" open={confirm} onClose={onClose}>
                <Typography variant="body1" color="error">
                    {deleteAlertText}
                </Typography>
                <Box
                    component="div"
                    marginTop={1.5}
                    display="flex"
                    flexDirection={breakPoints.sm ? "row" : "column-reverse"}
                    gap={1}
                    justifyContent="flex-end"
                    width="100%"
                >
                    <Button type="button" variant="elevated" onClick={onClose} size="small">
                        No
                    </Button>
                    <Button onClick={onDelete} size="small" variant="filled">
                        Yes
                    </Button>
                </Box>
            </DailogBox>
            {/* Cancel AlertBox */}
            <DailogBox title="Confirm" open={cancel} onClose={handleCancel}>
                <Typography variant="body1" color="error">
                    {cancelAlertText}
                </Typography>
                <Box
                    component="div"
                    marginTop={1.5}
                    display="flex"
                    flexDirection={breakPoints.sm ? "row" : "column-reverse"}
                    gap={1}
                    justifyContent="flex-end"
                    width="100%"
                >
                    <Button type="button" disabled={loading} variant="elevated" onClick={() => setCancel(false)} size="small">
                        No
                    </Button>
                    <Button onClick={handleCancel} disabled={loading} size="small" variant="filled">
                        Yes
                    </Button>
                </Box>
            </DailogBox>
        </>
    );
};

export default ModalButtons;
