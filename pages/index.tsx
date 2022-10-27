import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { useHabits } from "../context/AppContext";
import { tHabit, tHabits, tAction, tCondition } from "../helpers";
import Habit from "../components/habit";

export default function Home() {
  const { addHabit, editHabit, deleteHabit, habits } = useHabits();
  const addHabitStyling = {
    fontSize: "4em",
    fontWeight: "700",
    cursor: "pointer",
    width: "100%",
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
  // const [habitsSample, setHabitsSample] = useState([
  //   {
  //     id: "1",
  //     conditions: [{ id: "c1", title: "🌅 the sun shines" }],
  //     actions: [{ id: "a1", title: "⏰ wake up" }],
  //   },
  //   {
  //     id: "2",
  //     conditions: [{ id: "c2", title: "⏰ wake up" }],
  //     actions: [
  //       { id: "a2a", title: "🚿 shower" },
  //       { id: "a2b", title: "🪥 brush teeth" },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     conditions: [
  //       { id: "c3a", title: "😒 bored" },
  //       { id: "c3b", title: "🧘‍♀️ in a calm place" },
  //     ],
  //     actions: [{ id: "a3", title: "📖 read a book" }],
  //   },
  // ]) as any;

  return (
    <div className={styles.container}>
      <Head>
        <title>Habits</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div onClick={() => addHabit(simpleHabit)} style={addHabitStyling}>
          {"{"}
        </div>

        <div>
          {/* <button onClick={() => console.log(habits)}>ListHabits</button> */}
          {/* <button onClick={() => addHabit(simpleHabit)}>AddHabit</button> */}
          {/* <button onClick={() => editHabit(editedHabitA)}>
            InitializeEdit
          </button> */}
          {/* <button onClick={() => editHabit(editedHabitB)}>EditHabit</button>
          <button onClick={() => deleteHabit("xxx")}>DeleteHabit</button> */}
        </div>

        {habits &&
          habits
            .sort((a: any, b: any) =>
              a.order < b.order ? 1 : a.order > b.order ? -1 : 0
            )
            .map((habit: any, index: any) => {
              return <Habit key={habit.id} habit={habit}></Habit>;
            })}

<div onClick={() => addHabit(simpleHabit)} style={addHabitStyling}>
          {"}"}
        </div>
      </main>
    </div>
  );
}
