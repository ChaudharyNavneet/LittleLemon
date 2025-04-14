import {
  Box, Button, FormControl, FormLabel, Input, Select, Heading, VStack, FormErrorMessage
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const BookingForm = ({availableTimes}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number()
      .required('Number of guests is required')
      .min(1, 'At least 1 guest')
      .max(10, 'Maximum 10 guests'),
    occasion: Yup.string(),
  });

  return (
    <Box p={10} maxW="lg" mx="auto">
      <Heading mb={6}>Reserve a Table</Heading>
      <Formik
        initialValues={{
          name: '',
          date: '',
          time: '',
          guests: '',
          occasion: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          alert("Reservation submitted!");
          actions.setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form>
            <VStack spacing={4}>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name} isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input {...field} />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="date">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.date && form.touched.date} isRequired>
                    <FormLabel>Date</FormLabel>
                    <Input type="date" {...field} />
                    <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="time">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.time && form.touched.time} isRequired>
                    <FormLabel>Time</FormLabel>
                    <Select {...field}>
                    <option value="">Select</option>
                    {availableTimes.map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                    </Select>
                    <FormErrorMessage>{form.errors.time}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="guests">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.guests && form.touched.guests} isRequired>
                    <FormLabel>Guests</FormLabel>
                    <Input type="number" {...field} />
                    <FormErrorMessage>{form.errors.guests}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="occasion">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Occasion</FormLabel>
                    <Select {...field}>
                      <option value="">None</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                    </Select>
                  </FormControl>
                )}
              </Field>
              <Button type="submit" colorScheme="yellow" isLoading={formik.isSubmitting}>
                Reserve
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
