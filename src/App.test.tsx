import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("renders", () => {
  mount(<App />);
  describe("Header Test", () => {
    cy.get("nav", { timeout: 5000 })
      .should("be.visible")
      .find("form")
      .contains(".form-control")
      .then(() => {
        cy.get("li").should("be.visible");
      });
  });
  describe("Preference Test", () => {
    cy.get(".card", { timeout: 5000 }).should("be.visible").find(".card-body");
  });
});
