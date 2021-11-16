import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ReferInfo2({link,id,title,desc1,desc2,default1,apply,definition,use,version,view}) {
    return (
        <li>
            <Link to={{ pathname: "ReferDetail", state: {link,id,title,desc1,desc2,default1,apply,definition,use,version,view}}}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{apply}</span>
            </Link>
        </li>
    )
}

ReferInfo2.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    default1: PropTypes.string.isRequired,
    apply: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired,
    use: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
}

export default ReferInfo2;
