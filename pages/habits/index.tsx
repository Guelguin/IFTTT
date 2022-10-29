import Head from "next/head";
import styles from "../../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { useHabits } from "../../context/AppContext";
import { tHabit, tHabits, tAction, tCondition } from "../../helpers";
import Habit from "../../components/habit";

export default function Home() {
  const { addHabit, editHabit, deleteHabit, habits, initializeHabits } =
    useHabits();
  const addHabitStyling = {
    fontSize: "2em",
    fontWeight: "500",
    cursor: "pointer",
    width: "100%",
    marginTop: "-10px",
    padding: "10px",
  };

  const templateConditions = [
    "⏰ wakeup",
    "😰 anxious",
    "🧘‍♂️ calm",
    "🌛 midnight",
    "💤 sleepy",
    "☹️ hungry",
    "😠 frustrated",
    "🥱 bored",
    "🚬 craving",
  ];
  const templateActions = [
    "🎞️ watch a movie",
    "🚿 shower",
    "📘 read a book",
    "🪥 brush teeth",
    "🥛 drink water",
    "🧘‍♂️ meditate",
    "🍲 prepare food",
    "🧹 clean house",
    "📞 call someone",
    "🚶‍♀️ go for a walk",
  ];

  useEffect(() => {}, [habits]);

  const simpleHabit: tHabit = {
    id: undefined,
    conditions: [
      {
        title:
          templateConditions[
            Math.floor(Math.random() * templateConditions.length)
          ],
      },
    ],
    actions: [
      {
        title:
          templateActions[
            Math.floor(Math.random() * templateConditions.length)
          ],
      },
    ],
  };

  const emptyHabit: tHabit = {
    id: undefined,
    conditions: [
      {
        title: "...",
      },
    ],
    actions: [
      {
        title: "...",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{"{ ifttt }"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: "none",
          position: "fixed",
          height: "65px",
          width: "100vw",
          margin: "-5px auto",
          // display: "flex",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          justifyContent: "space-around",
          backdropFilter: "blur(50px)",
          zIndex: 99999999,
          borderBottom: "1px solid black",
        }}
      >
        <div
          style={{
            fontSize: "3em",
            fontWeight: "600",
            textShadow: "0px 0px 100px white",
            marginTop: "5px",
          }}
        >
          <span
            style={{
              marginTop: "-3px",
              position: "absolute",
              marginLeft: "-115px",
              fontWeight: "bolder",
            }}
          >
            IFTTT
          </span>
          <sup
            style={{
              fontSize: "0.8em",
              marginTop: "10px",
              fontWeight: "100",
              marginLeft: "20px",
              position: "absolute",
              fontFamily: "monospace",
            }}
          >
            [
          </sup>
          <sup
            style={{
              fontSize: "0.4em",
              marginTop: "16px",
              marginLeft: "30px",
              position: "absolute",
              fontFamily: "monospace",
            }}
          >
            for
          </sup>
          <sup
            style={{
              fontSize: "0.4em",
              marginTop: "26px",
              marginLeft: "30px",
              position: "absolute",
              fontFamily: "monospace",
            }}
          >
            humans
          </sup>
          <sup
            style={{
              fontSize: "0.8em",
              fontWeight: "100",
              marginTop: "10px",
              marginLeft: "75px",
              position: "absolute",
              fontFamily: "monospace",
            }}
          >
            ]
          </sup>
        </div>
      </div>

      <main className={styles.main}>
        <div onClick={() => addHabit(simpleHabit)} style={addHabitStyling}>
          {"const goodHabits = ["}
        </div>

        <div></div>
        <div>
          {habits &&
            habits
              .sort((a: any, b: any) =>
                a.order > b.order ? 1 : a.order < b.order ? -1 : 0
              )
              .map((habit: any, index: any) => {
                return <Habit key={habit.id} habit={habit}></Habit>;
              })}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={() => addHabit(simpleHabit)}
            style={{ cursor: "pointer", width: "fit-content" }}
          >
            <Habit key={emptyHabit.id} habit={emptyHabit} disabled></Habit>
          </div>
          {habits.length == 0 && (
            <>
              <div style={{ fontSize: "1.5em", fontFamily: "monospace" }}>
                {" "}
                OR{" "}
              </div>

              <div
                onClick={() => initializeHabits()}
                style={{
                  cursor: "pointer",
                  width: "fit-content",
                  background: "#eeeeee",
                  color: "#666",
                  padding: 19,
                  height: "auto",
                  fontSize: "1.5em",
                  borderRadius: 10,
                  marginRight: 30,
                }}
              >
                Initialize Habits
              </div>
            </>
          )}
        </div>

        <div style={addHabitStyling}>{"];"}</div>
      </main>
    </div>
  );
}
