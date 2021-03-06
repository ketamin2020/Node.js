const { Router } = require("express");
const contactRouter = Router();
const {
  getContacts,
  getContactById,
  createContact,
  removeContacts,
  patchContact,
  getContactBySubsription,
} = require("./contacts.controllers");

const { validateCreate, validatePatch } = require("./contacts.validator");

contactRouter.get("/", getContactBySubsription, getContacts);

contactRouter.get("/:contactId", getContactById);

contactRouter.post("/", validateCreate, createContact);

contactRouter.delete("/:contactId", removeContacts);

contactRouter.patch("/:contactId", validatePatch, patchContact);

module.exports = contactRouter;
