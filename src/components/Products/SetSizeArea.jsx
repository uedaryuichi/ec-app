import React, {useCallback, useState} from "react";
import { makeStyles, TableContainer } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { TextInput } from "../UIkit";

const useStyles = makeStyles({
    checkIcon: {
        float: 'right'
    },
    iconCell: {
        height: 48,
        width: 48
    }
})

const SetSizeArea = (props) => {
    const classes = useStyles();

    const [index, setIndex] = useState(0),
          [size, setSize] = useState(''),
          [quantity, setQuantity] = useState(0);

    const inputSize = useCallback((event) => {
        setSize(event.target.value)
    }, [setSize]);

    const inputQuantity = useCallback((event) => {
        setQuantity(event.target.value)
    }, [setQuantity]);
    
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>サイズ</TableCell>
                            <TableCell>数量</TableCell>
                            <TableCell className={classes.iconCell} />
                            <TableCell className={classes.iconCell} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.sizes.length > 0 && (
                            props.sizes.map((item, index) => (
                                <TableRow key={item.size}>
                                    <TableCell>{item.size}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>
                                        <IconButton className={classes.iconCell}>
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton className={classes.iconCell}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
                <div>
                    <TextInput 
                        fullWidth={false} label={'サイズ'} multiline={false} required={true}
                        onChange={inputSize} rows={1} value={size} type={'text'}
                    />
                    <TextInput 
                        fullWidth={false} label={'数量'} multiline={false} required={true}
                        onChange={inputQuantity} rows={1} value={quantity} type={'number'}
                    />
                </div>
                <IconButton className={classes.checkIcon}>
                    <CheckCircleIcon />
                </IconButton>
            </TableContainer>
        </div>
    )
}

export default SetSizeArea;