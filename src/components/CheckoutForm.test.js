import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, waitFor, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render (<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render (<CheckoutForm/>)
    
    const firstInput = screen.getByLabelText(/First name:/i);
    userEvent.type(firstInput, 'Billy')
    const lastInput = screen.getByLabelText(/Last name:/i);
    userEvent.type(lastInput, 'Myers')
    const addInput = screen.getByLabelText(/Address:/i);
    userEvent.type(addInput, '1234 Drive Lane')
    const cityInput = screen.getByLabelText(/City:/i);
    userEvent.type(cityInput, 'Houston')
    const stateInput = screen.getByLabelText(/State:/i);
    userEvent.type(stateInput, 'Texas')
    const zipInput = screen.getByLabelText(/Zip:/i);
    userEvent.type(zipInput,'77449');

    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(() =>{
        const success = screen.getByTestId('successMessage')
        expect(success).toBeInTheDocument();
    })

});
