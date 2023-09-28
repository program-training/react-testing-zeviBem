import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import InputUrl from "./input";
import { describe, test, expect } from "vitest";

test("check if the URL is set correctly", async() => {
    render(<InputUrl/>)
    const inputField = screen.getByPlaceholderText("enter yore url")
    userEvent.type(inputField, "https://app.slack.com")

    const clickButton = screen.getByText("CLICK")
    userEvent.click(clickButton)

    await waitFor(() => {
    const imgElement = screen.getByAltText("img QR");
    const imgSrc = imgElement.getAttribute("src");
     const img_url = "https://api.qrserver.com/v1/create-qr-code/?data=&size=300x300";
    expect(imgSrc).toContain(img_url);
    })
})

test("check if the button is correct", async () => {
    render (<InputUrl />)
    const input_value = "https://app.slack.com"
    
    const inputField = screen.getByPlaceholderText("enter yore url")
    const clickButton = screen.getByText("CLICK");
    const imgElement = screen.getByAltText("img QR");

    userEvent.type(inputField, input_value);
    userEvent.click(clickButton);

    await waitFor(() => {
        expect(imgElement).toHaveAttribute(
            "src",
            `https://api.qrserver.com/v1/create-qr-code/?data=${input_value}&size=300x300`
        );
    });
})