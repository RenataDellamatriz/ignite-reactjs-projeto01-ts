import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/renatadellamatriz.png",
        name: "Renata Dellamatriz",
        role: "Front-end Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-10-21 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/edsonprimo.png",
        name: "Edson Primo",
        role: "Full Stack Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-10-25 16:00:00"),
    },
    {
      id: 3,
      author: {
        avatarUrl: "https://github.com/andradejaum.png",
        name: "João Andrade",
        role: "Full Stack Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-10-25 16:00:00"),
    },
  ];

  
  
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map( post => {
            return (
              <Post
                key = {post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
