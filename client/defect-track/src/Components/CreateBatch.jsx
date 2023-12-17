import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createProduct } from '../Redux/slices/products'; // Замените на правильные пути
import { createBatch } from '../Redux/slices/batches'; // Замените на правильные пути

const CreateBatchPage = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      batchName: '',
      manufactureDate: '',
      description: '',
      products: [{ name: '', description: '', quantity: '', features: [''] }],
    }
  });

  const { fields: productFields, append: appendProduct } = useFieldArray({
    control,
    name: 'products'
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { products, ...batchData } = data;
  
    const expandedProducts = products.flatMap(product => {
      return Array.from({ length: product.quantity }, () => ({
        name: product.name,
        description: product.description,
        features: product.features
      }));
    });
  
    const createdProducts = await Promise.all(expandedProducts.map(product => 
      dispatch(createProduct(product))
    ));
  
    const createdProductIds = createdProducts
      .map(result => result.payload)
      .filter(product => product && product._id) // Добавлена проверка на наличие продукта и его _id
      .map(product => product._id);
  
    if (createdProductIds.length > 0) {
      batchData.products = createdProductIds;
      dispatch(createBatch(batchData));
    } else {
      console.error("Ошибка при создании продуктов");
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5">Создать партию</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField {...register('name')} label="Название партии" fullWidth margin="normal" />
          <TextField {...register('manufactureDate')} label="Дата производства" type="date" InputLabelProps={{ shrink: true }} fullWidth margin="normal" />
          <TextField {...register('description')} label="Описание" fullWidth margin="normal" />
          
          {productFields.map((productField, productIndex) => (
            <div key={productField.id}>
              <Typography variant="h6">Товар {productIndex + 1}</Typography>
              <TextField {...register(`products.${productIndex}.name`)} label="Название товара" fullWidth margin="normal" />
              <TextField {...register(`products.${productIndex}.description`)} label="Описание товара" fullWidth margin="normal" />
              <TextField {...register(`products.${productIndex}.quantity`)} label="Количество" type="number" fullWidth margin="normal" />
              <FieldArrayFeatures control={control} productIndex={productIndex} register={register} />
            </div>
          ))}
          <Button type="button" variant="contained" onClick={() => appendProduct({ name: '', description: '', quantity: '', features: [''] })} style={{ marginTop: '10px' }}>Добавить товар</Button>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>Создать партию</Button>
        </form>
      </Paper>
    </Container>
  );
};

const FieldArrayFeatures = ({ control, productIndex, register }) => {
  const { fields, append } = useFieldArray({
    control,
    name: `products.${productIndex}.features`
  });

  return (
    <>
      {fields.map((field, index) => (
        <TextField 
          key={field.id}
          {...register(`products.${productIndex}.features.${index}`)}
          label={`Функция ${index + 1}`}
          fullWidth 
          margin="normal" 
        />
      ))}
      <Button
        type="button"
        variant="contained"
        onClick={() => append('')}
        style={{ marginBottom: '10px' }}
      >
        Добавить функцию
      </Button>
    </>
  );
};

export default CreateBatchPage;