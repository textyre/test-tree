import { css } from 'astroturf'

export const styles = css`
    .body {
        padding-top: 15px;
        padding-left: 20px;
    }
    .wrapper {
        display: inline-flex;
        align-items: center;
        width: 100%;
        .node {
            position: relative;
            margin-bottom: 5px;
            cursor: pointer;
            &:hover {
                color:  #8285e8;
            }
        }
        .new {
            animation: new_node 5s ease-in-out 0s 10 alternate;
        }
        .rename {
            animation: rename 5s ease-in-out 0s 10 alternate;
        }
        .for_deleted {
            animation: for_delete 5s ease-in-out 0s 10 alternate;
        }
        .comment {
            font-size: 12px;
            font-weight: 600;
            font-style: italic;
            opacity: 0.5;
            margin-left: 10px;
        }
    }

    @keyframes new_node {
        0% { color: white; }
        100% { color: #42d473; }
    }

    @keyframes rename {
        0% { color: white; }
        100% { color: #fce979; }
    }

    @keyframes for_delete {
        0% { color: white; }
        100% { color: #d44242; }
    }
    
`
