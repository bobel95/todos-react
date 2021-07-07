import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const modalStyle = {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        padding: theme.spacing(1, 4, 3),
        borderRadius: "1rem",
    },
}));

const SimpleModal = (props) => {
    const { content, component } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            {content}
        </div>
    );

    return (
        <div>
            {/*<Typograph>*/}
            {/*    <Link href="#" onClick={handleOpen} variant="body2">*/}
            {/*        Add a custom category*/}
            {/*    </Link>*/}
            {/*</Typograph>*/}
            <div onClick={handleOpen}>
                {component}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default SimpleModal;