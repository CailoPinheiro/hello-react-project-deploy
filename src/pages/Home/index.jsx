import React, { useState, useEffect } from "react";
import "./home.css";
import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";
import logoImage from "./assets/logo.svg";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = {
      id: nextId,
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
    setNextId(nextId + 1);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/cailopinheiro")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []);

  return (
    <div className="container">
      <header>
        <div id="sub-header">
          <h1>Lista de Nomes</h1>
          <div className="perfil">
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="foto de perfil" />
          </div>
        </div>
      </header>

      <input
        type="text"
        placeholder="Insira seu nome"
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      <div className="cardList">
        {students.map((student) => (
          <Card key={student.id} name={student.name} time={student.time} />
        ))}
      </div>
    </div>
  );
}
