import "./App.css";
import TabContent from "./components/TabContent";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("Education");
  return (
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div class="card" style={{ width: "65rem" }}>
        <div class="card-body p-5">
          <div class="d-flex flex-row">
            <div class="p-2" style={{ width: "400px" }}>
              <img
                src="./assets/grad pic.JPG"
                class="mb-4 rounded-circle"
                style={{ width: "150px" }}
              />
              <p class="fs-4 border-bottom w-75 pb-3">Hi! I'm Louisse Evale</p>
              <p class="pb-3 w-75">
                22 year old graduating Information Technology student from
                University of Santo Tomas.
                <br />
                <br />
                Let's connect!
                <br />
                louissemevale@gmail.com
                <br />
                <a href="https://github.com/uisselo">GitHub</a> |{" "}
                <a href="https://www.linkedin.com/in/louisseevale/">LinkedIn</a>
              </p>
            </div>
            <div class="p-2">
              <ul class="nav nav-tabs" role="tablist">
                {["Education", "Skills", "Experience", "Certifications"].map(
                  (e, i) => (
                    <li class="nav-item" role="presentation">
                      <button
                        class={i === 0 ? "nav-link active" : "nav-link"}
                        data-bs-toggle="tab"
                        type="button"
                        role="tab"
                        aria-selected={i === 0 ? "true" : "false"}
                        onClick={() => setContent(e)}
                      >
                        {e}
                      </button>
                    </li>
                  )
                )}
              </ul>

              {content === "Education" ? (
                <TabContent
                  content={
                    <>
                      <p>
                        <strong>Our Lady of Peace School Antipolo</strong>{" "}
                        <br />
                        Secondary to SHS
                        <br />
                        2013-2018
                      </p>
                      <p>
                        <strong>University of Santo Tomas</strong> <br />
                        BS Information Technology
                        <br /> Major in Mobile and Web Development
                        <br />
                        2018-Present
                      </p>
                    </>
                  }
                />
              ) : content === "Skills" ? (
                <TabContent
                  content={
                    <>
                      <p>
                        <strong>I'm skilled in</strong>
                        <br />
                        HTML, CSS, JavaScript, Bootstrap, Angular, React, React
                        Native with Expo
                      </p>
                      <p>
                        <strong>I have experience in</strong>
                        <br />
                        Java, Python, Oracle, Node JS, Express JS, MongoDB,
                        Firebase,
                        <br /> Android Studio, PHP
                      </p>
                      <p>
                        <strong>Currently learning</strong>
                        <br />
                        Tailwind, Next JS, AWS
                      </p>
                    </>
                  }
                />
              ) : content === "Experience" ? (
                <TabContent
                  content={
                    <>
                      <p>
                        <strong>
                          UST SITE: Society of Information Technology
                          Enthusiasts
                        </strong>
                        <br />
                        Member of Audit and Logistics Team
                        <br />
                        2018-2019
                      </p>
                      <p>
                        <strong>DevOps Intern at DevKinetics Inc.</strong>
                        <br />
                        January 2022-Present
                      </p>
                    </>
                  }
                />
              ) : (
                <TabContent
                  content={
                    <>
                      <p>
                        <strong>PhilNITs IT Passport (Level 1)</strong>
                        <br />
                        2021
                      </p>
                    </>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
