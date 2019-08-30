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
        padding: 5px;
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
        &:hover > .wrapper_comment {
            opacity: 1;
        }
        .wrapper_comment_delete {
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .wrapper_comment {
            display: inline-flex;
            align-items: center;
            opacity: 0;
        }
        .comment {
            font-size: 12px;
            font-weight: 600;
            font-style: italic;
            opacity: 0.5;
            margin-left: 10px;
            cursor: pointer;
        }
        .comment_delete {
            height: 10px;
            width: 10px;
            fill: white;
            margin-left: 10px;
            &:hover {
                fill: #8285e8;
            }
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
