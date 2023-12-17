import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBatches } from '../Redux/slices/batches';
import { fetchCommission } from '../Redux/slices/Commission';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const DefectReportPage = () => {
    const dispatch = useDispatch();
    const { items: batches } = useSelector(state => state.batches.batches);
    const { items: commissionMembers } = useSelector(state => state.commission.commission);

    useEffect(() => {
        dispatch(fetchBatches());
        dispatch(fetchCommission());
    }, [dispatch]);

    const batchesWithDefects = batches.filter(batch => batch.defectedProducts.length > 0);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Отчет о Браках
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Название Партии</TableCell>
                            <TableCell>Дата Производства</TableCell>
                            <TableCell>Описание</TableCell>
                            <TableCell>Бракованные Продукты</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {batchesWithDefects.map((batch) => (
                            <TableRow key={batch._id}>
                                <TableCell>{batch.name}</TableCell>
                                <TableCell>{batch.manufactureDate}</TableCell>
                                <TableCell>{batch.description}</TableCell>
                                <TableCell>{batch.defectedProducts.join(', ')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="subtitle1" style={{ marginTop: '20px' }}>
                Одобрено членами комиссии: {commissionMembers.map(member => `${member.name} (${member.jobTitle})`).join(', ')}
            </Typography>
        </div>
    );
};

export default DefectReportPage;
