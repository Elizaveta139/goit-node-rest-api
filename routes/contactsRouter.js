import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} from "../controllers/contactsControllers.js";

const contactsRouter = express.Router();

contactsRouter.get("/", cntrlWrapper(getAllContacts));

contactsRouter.get("/:id", isValidId, cntrlWrapper(getOneContact));

contactsRouter.delete("/:id", isValidId, cntrlWrapper(deleteContact));

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", updateContact);

export default contactsRouter;
