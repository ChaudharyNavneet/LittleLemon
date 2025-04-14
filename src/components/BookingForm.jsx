import {
  Box, Button, FormControl, FormLabel, Input, Select, Heading, VStack, FormErrorMessage
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const BookingForm = ({ availableTimes }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number()
      .typeError('Number of guests is required')
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
          <Form noValidate>
            <VStack spacing={4}>
              <Field name="name">
                {({ field }) => (
                  <FormControl isInvalid={formik.touched.name && !!formik.errors.name} isRequired>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input id="name" {...field} />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="date">
                {({ field }) => (
                  <FormControl isInvalid={formik.touched.date && !!formik.errors.date} isRequired>
                    <FormLabel htmlFor="date">Date</FormLabel>
                    <Input id="date" type="date" {...field} />
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="time">
                {({ field }) => (
                  <FormControl isInvalid={formik.touched.time && !!formik.errors.time} isRequired>
                    <FormLabel htmlFor="time">Time</FormLabel>
                    <Select id="time" {...field}>
                      <option value="">Select</option>
                      {availableTimes.map((time) => (
                        <option key={time}>{time}</option>
                      ))}
                    </Select>
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="guests">
                {({ field }) => (
                  <FormControl isInvalid={formik.touched.guests && !!formik.errors.guests} isRequired>
                    <FormLabel htmlFor="guests">Guests</FormLabel>
                    <Input id="guests" type="number" {...field} />
                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="occasion">
                {({ field }) => (
                  <FormControl>
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select id="occasion" {...field}>
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
