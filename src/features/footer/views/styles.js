import { css } from 'astroturf'

export const styles = css`
    .footer {
        position: fixed;
        bottom: 0;
        padding: 20px;
        box-shadow: 0px 5px 10px #0000002b;
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        z-index: 9999;
        background-color: inherit;
        box-sizing: border-box;
    
        .wrapper_comment {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: space-between;
            align-items: flex-start;
            .who {
                padding: 10px;
                background-color: #8285e8;
                color: white;
                border-radius: 5px;
                margin-right: 10px;
                display: inline-flex;
                white-space: nowrap;
            }
            .comment {
                border-style: solid;
                border-width: thin;
                border-color: white;
                border-radius: 8px;
                width: 100%;
                padding: 10px;
                overflow-y: scroll;
                box-sizing: border-box;
            }
            .add_message {
                width: 35px;
                height: 35px;
                margin-left: 20px;
                fill: white;
                &:hover {
                    fill: #8285e8;
                }
            }
        }
    }
`
