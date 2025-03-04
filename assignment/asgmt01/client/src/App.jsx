import { useState } from "react";
import "./App.css";

const App = () => {
  const [overview, setOverview] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [skill, setSkill] = useState([]);
  const [edu, setEdu] = useState([]);
  const [exp, setExp] = useState([]);
  const [showOverview, setShowOverview] = useState(false);
  const [showQualification, setShowQualification] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [showEdu, setShowEdu] = useState(false);
  const [showExp, setShowExp] = useState(false);

  const fetchOverview = async () => {
    try {
      if (showOverview) {
        setShowOverview(false);
        setOverview("");
      } else {
        const res = await fetch("http://localhost:8000/fetch/getOverview");
        const data = await res.text();
        setOverview(data);
        setShowOverview(true);
      }

    } catch (error) {
      console.error("Error fetching overview data:", error);
    }
  };

  const fetchQualification = async () => {
    try {
      if (showQualification) {
        setShowQualification(false);
        setQualification("");
      } else {
        const res = await fetch("http://localhost:8000/fetch/getQualification");
        const data = await res.text();
        setQualification(data);
        setShowQualification(true);
      }

    } catch (error) {
      console.error("Error fetching qualification data:", error);
    }
  };

  const fetchSkill = async () => {
    try {
      if (showSkill) {
        setShowSkill(false);
        setSkill("");
      } else {
        const res = await fetch("http://localhost:8000/fetch/getSkill");
        const data = await res.text();
        setSkill(data);
        setShowSkill(true);
      }

    } catch (error) {
      console.error("Error fetching skill data:", error);
    }
  };

  const fetchEdu = async () => {
    try {
      if (showEdu) {
        setShowEdu(false);
        setEdu("");
      } else {
        const res = await fetch("http://localhost:8000/fetch/getEdu");
        const data = await res.text();
        setEdu(data);
        setShowEdu(true);
      }

    } catch (error) {
      console.error("Error fetching education data:", error);
    }
  };

  const fetchExp = async () => {
    try {
      if (showExp) {
        setShowExp(false);
        showExp("");
      } else {
        const res = await fetch('http://localhost:8000/fetch/getExp')
        const data = await res.text();
        setExp(data);
        setShowExp(true);
      }

    } catch (error) {
      console.error("Error fetching experience data:", error);
    }
  };


  return (
    <div className="container">
      <header>
        <h2>Yeonwoo Hong</h2>
        <h3>Objective: </h3>
        <p>Computer programming student seeking Summer 2025 Co-op position in software development.</p>
      </header>

      <div className="buttons">

        <button onClick={fetchOverview}>
          {showOverview ? "Hide Overviews" : "Overviews"}
        </button>
        {showOverview && <pre>{overview}</pre>}

        <button onClick={fetchQualification}>
          {showQualification ? "Hide Qualifications" : "Qualifications"}
        </button>
        {showQualification && <pre>{qualification}</pre>}

        <button onClick={fetchSkill}>
          {showSkill ? "Hide Skills" : "Skills"}
        </button>
        {showSkill && <pre>{skill}</pre>}

        <button onClick={fetchEdu}>
          {showEdu ? "Hide Education" : "Education"}
        </button>
        {showEdu && <pre>{edu}</pre>}

        <button onClick={fetchExp}>
          {showExp ? "Hide Experience" : "Experience"}
        </button>
        {showExp && <pre>{exp}</pre>}
      </div>

      <footer>
        <p>North York | 437-660-3769 | ywhong830@gmail.com |
          <a href="https://www.linkedin.com/in/yeonwoo-hong-236b49206/" target="_blank" class="link">LinkedIn</a>
        </p>
      </footer>
    </div>
  );

};
export default App;
