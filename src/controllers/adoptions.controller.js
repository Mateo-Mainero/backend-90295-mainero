import { adoptionsService } from "../services/index.js";

export const getAdoptions = async (req, res) => {
  try {
    const adoptions = await adoptionsService.getAllAdoptions();
    res.send({ status: "success", payload: adoptions });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
};

export const getAdoptionById = async (req, res) => {
  try {
    const { aid } = req.params;
    const adoption = await adoptionsService.getAdoptionById(aid);
    if (!adoption) return res.status(404).send({ status: "error", message: "Adoption not found" });
    res.send({ status: "success", payload: adoption });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
};

export const createAdoption = async (req, res) => {
  try {
    const { uid, pid } = req.params;
    const newAdoption = await adoptionsService.createAdoption({ user: uid, pet: pid });
    res.status(201).send({ status: "success", payload: newAdoption });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
};
