import React from 'react'; //racf
import PropTypes from 'prop-types'; //impt
import ReposItem from './RepoItem';

//destructure, we need key for list
const Repos = ({ repos }) => {
    return repos.map(repo => <ReposItem repo={repo} key={repo.id}/>)
}

Repos.protoTypes = {
    repos: PropTypes.array.isRequired
};

export default Repos;
