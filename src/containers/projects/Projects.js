import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  // useEffect(() => {
  //   const getRepoData = () => {
  //     fetch("/profile.json")
  //       .then(result => {
  //         if (result.ok) {
  //           return result.json();
  //         }
  //         throw result;
  //       })
  //       .then(response => {
  //         setrepoFunction(response.data.user.pinnedItems.edges);
  //       })
  //       .catch(function (error) {
  //         console.error(
  //           `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
  //         );
  //         setrepoFunction("Error");
  //       });
  //   };
  //   getRepoData();
  // }, []);

  useEffect(() => {
    const repos = [
      {
        id:12,
        name:"VideoCollab",
        url:"https://github.com/HarshNagarkar17/MERN-VideoCollab",
        description:"A dynamic web application that enables users to engage in peer-to-peer real-time video calls while simultaneously sharing a collaborative whiteboard.",
      },
      {
        id:112,
        name:"Conet",
        url:"https://github.com/HarshNagarkar17/Conet-git",
        description:"A dynamic college networking website designed exclusively for students, fostering connections, collaboration, and community engagement within the college ecosystem. Seamlessly integrating features for student profiles and interest groups,",
      }
    ]

    setrepo(repos);
  }, [])
  // if (
  //   !(typeof repo === "string" || repo instanceof String) &&
  //   openSource.display
  // ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title"></h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.id} isDark={isDark} />
                );
              })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  // } else {
  //   return <FailedLoading />;
  // }
}
