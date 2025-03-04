import express from "express";
import { overviewData, qualificationData, skillData, educationData, experienceData } from "./data.js";

const router = express.Router();

router.get("/getOverview", (req, res) => {
    console.log('Fetching overview data')
    res.send(overviewData)
});

router.get("/getQualification", (req, res) => {
    console.log('Fetching qualification data')
    res.send(qualificationData)
});

router.get("/getSkill", (req, res) => {
    console.log('Fetching skill data')
    res.send(skillData)
});

router.get("/getEdu", (req, res) => {
    console.log('Fetching education data')
    res.send(educationData)
});

router.get("/getExp", (req, res) => {
    console.log('Fetching experience data')
    res.send(experienceData)
});

export default router;
