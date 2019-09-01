import { css } from 'astroturf'

export const styles = css`
    .body {
        padding-top: 15px;
        padding-left: 20px;
        padding-bottom: 150px;
    }
    .wrapper {
        display: inline-flex;
        justify-content: space-between;
        padding: 5px;
        box-sizing: border-box;
        .node {
            position: relative;
            margin-bottom: 5px;
            cursor: pointer;
            &:hover {
                color:  #8285e8;
                opacity: 1;
            }            
        }
        .node_removed {
            color: #e34444;
            opacity: 0.5;
        }
        .node_edit {
            color: #ffde62
        }
        .leftPart {
            .wrapper_comment {
                align-items: center;
                opacity: 0;
                max-height: 0;
                min-height: 0;
                transition: all .2s ease-in-out;
                max-width: 500px;
                overflow-y: scroll;
                padding-right: 30px;
                position: relative;
                .comment {
                    display: inline-flex;
                    word-break: break-all;
                    font-size: 14px;
                    font-weight: 600;
                    font-style: italic;
                    opacity: 0.5;
                    cursor: pointer;
                }
                .wrapper_comment_delete {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    &:hover > .comment_delete{
                        fill: #8285e8;
                    }
                    .comment_delete {
                        height: 15px;
                        width: 15px;
                        fill: white;
                        margin-left: 10px;
                        z-index: 1;
                        cursor: pointer;
                    }
                }
                
            }
            .active_comment {
                opacity: 1;
                max-height: 100px;
                overflow-y: scroll;
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
