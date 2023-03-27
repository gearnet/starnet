const textTemplate = {
    header: 'Deposit - Credit or Debit Card',
    // cards: ["deposit-sponsor-1.svg", "deposit-sponsor-2.svg", "deposit-sponsor-3.svg", "sponsor-logo4.png", "deposit-sponsor-1.svg", "deposit-sponsor-2.svg", "deposit-sponsor-3.svg", "sponsor-logo4.png"],
    input: {
        cardNumber: {
            titleText: 'Card Number:',
            inputText: '**** **** **** ****'
        },
        expirationDate: {
            titleText: "Expiration Date:",
            inputText: '** / ****'
        },
        cardSecurityCode: {
            titleText: 'Card Security Code:',
            inputText: '***'
        },
        amount: {
            titleText: 'Amount:',
            inputText: ['USD', '250']
        },
    },
    button: 'Deposit Now',
};
// base64 images instead of files
const depositArrow = 'data:image/png;base64,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',
    depositCardSecretTextDown = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjI5Mi4zNjJweCIgaGVpZ2h0PSIyOTIuMzYycHgiIHZpZXdCb3g9IjAgMCAyOTIuMzYyIDI5Mi4zNjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi4zNjIgMjkyLjM2MjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNmZmYiPg0KPGc+DQoJPHBhdGggZD0iTTI4Ni45MzUsNjkuMzc3Yy0zLjYxNC0zLjYxNy03Ljg5OC01LjQyNC0xMi44NDgtNS40MjRIMTguMjc0Yy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0DQoJCUMxLjgwNyw3Mi45OTgsMCw3Ny4yNzksMCw4Mi4yMjhjMCw0Ljk0OCwxLjgwNyw5LjIyOSw1LjQyNCwxMi44NDdsMTI3LjkwNywxMjcuOTA3YzMuNjIxLDMuNjE3LDcuOTAyLDUuNDI4LDEyLjg1LDUuNDI4DQoJCXM5LjIzMy0xLjgxMSwxMi44NDctNS40MjhMMjg2LjkzNSw5NS4wNzRjMy42MTMtMy42MTcsNS40MjctNy44OTgsNS40MjctMTIuODQ3QzI5Mi4zNjIsNzcuMjc5LDI5MC41NDgsNzIuOTk4LDI4Ni45MzUsNjkuMzc3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
    depositCreditCard = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM1ODU4NTgiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NTguNjY3LDg1LjMzM0g1My4zMzNDMjMuOTM2LDg1LjMzMywwLDEwOS4yNjksMCwxMzguNjY3djIzNC42NjdjMCwyOS4zOTcsMjMuOTM2LDUzLjMzMyw1My4zMzMsNTMuMzMzaDQwNS4zMzMNCgkJCWMyOS4zOTcsMCw1My4zMzMtMjMuOTM2LDUzLjMzMy01My4zMzNWMTM4LjY2N0M1MTIsMTA5LjI2OSw0ODguMDY0LDg1LjMzMyw0NTguNjY3LDg1LjMzM3ogTTQ5MC42NjcsMzczLjMzMw0KCQkJYzAsMTcuNjQzLTE0LjM1NywzMi0zMiwzMkg1My4zMzNjLTE3LjY0MywwLTMyLTE0LjM1Ny0zMi0zMlYxMzguNjY3YzAtMTcuNjQzLDE0LjM1Ny0zMiwzMi0zMmg0MDUuMzMzYzE3LjY0MywwLDMyLDE0LjM1NywzMiwzMg0KCQkJVjM3My4zMzN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MDEuMzMzLDE0OS4zMzNIMTAuNjY3QzQuNzc5LDE0OS4zMzMsMCwxNTQuMTEyLDAsMTYwdjY0YzAsNS44ODgsNC43NzksMTAuNjY3LDEwLjY2NywxMC42NjdoNDkwLjY2Nw0KCQkJYzUuODg4LDAsMTAuNjY3LTQuNzc5LDEwLjY2Ny0xMC42Njd2LTY0QzUxMiwxNTQuMTEyLDUwNy4yMjEsMTQ5LjMzMyw1MDEuMzMzLDE0OS4zMzN6IE00OTAuNjY3LDIxMy4zMzNIMjEuMzMzdi00Mi42NjdoNDY5LjMzMw0KCQkJVjIxMy4zMzN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMDIuNjY3LDI5OC42NjdoLTEyOGMtNS44ODgsMC0xMC42NjcsNC43NzktMTAuNjY3LDEwLjY2N1M2OC43NzksMzIwLDc0LjY2NywzMjBoMTI4DQoJCQljNS44ODgsMCwxMC42NjctNC43NzksMTAuNjY3LTEwLjY2N1MyMDguNTU1LDI5OC42NjcsMjAyLjY2NywyOTguNjY3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjAyLjY2NywzNDEuMzMzaC0xMjhDNjguNzc5LDM0MS4zMzMsNjQsMzQ2LjExMiw2NCwzNTJjMCw1Ljg4OCw0Ljc3OSwxMC42NjcsMTAuNjY3LDEwLjY2N2gxMjgNCgkJCWM1Ljg4OCwwLDEwLjY2Ny00Ljc3OSwxMC42NjctMTAuNjY3QzIxMy4zMzMsMzQ2LjExMiwyMDguNTU1LDM0MS4zMzMsMjAyLjY2NywzNDEuMzMzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDE2LDI3Ny4zMzNoLTIxLjMzM2MtMTcuNjQzLDAtMzIsMTQuMzU3LTMyLDMydjIxLjMzM2MwLDE3LjY0MywxNC4zNTcsMzIsMzIsMzJINDE2YzE3LjY0MywwLDMyLTE0LjM1NywzMi0zMnYtMjEuMzMzDQoJCQlDNDQ4LDI5MS42OTEsNDMzLjY0MywyNzcuMzMzLDQxNiwyNzcuMzMzeiBNNDI2LjY2NywzMzAuNjY3YzAsNS44ODgtNC43NzksMTAuNjY3LTEwLjY2NywxMC42NjdoLTIxLjMzMw0KCQkJYy01Ljg4OCwwLTEwLjY2Ny00Ljc3OS0xMC42NjctMTAuNjY3di0yMS4zMzNjMC01Ljg4OCw0Ljc3OS0xMC42NjcsMTAuNjY3LTEwLjY2N0g0MTZjNS44ODgsMCwxMC42NjcsNC43NzksMTAuNjY3LDEwLjY2Nw0KCQkJVjMzMC42Njd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
    depositPassword = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgaWQ9Il94MzFfX3gyQ181IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjNTg1ODU4Ij48cGF0aCBkPSJtMTguNzUgMjRoLTEzLjVjLTEuMjQgMC0yLjI1LTEuMDA5LTIuMjUtMi4yNXYtMTAuNWMwLTEuMjQxIDEuMDEtMi4yNSAyLjI1LTIuMjVoMTMuNWMxLjI0IDAgMi4yNSAxLjAwOSAyLjI1IDIuMjV2MTAuNWMwIDEuMjQxLTEuMDEgMi4yNS0yLjI1IDIuMjV6bS0xMy41LTEzLjVjLS40MTMgMC0uNzUuMzM2LS43NS43NXYxMC41YzAgLjQxNC4zMzcuNzUuNzUuNzVoMTMuNWMuNDEzIDAgLjc1LS4zMzYuNzUtLjc1di0xMC41YzAtLjQxNC0uMzM3LS43NS0uNzUtLjc1eiIvPjxwYXRoIGQ9Im0xNy4yNSAxMC41Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXYtMy43NWMwLTIuNDgxLTIuMDE5LTQuNS00LjUtNC41cy00LjUgMi4wMTktNC41IDQuNXYzLjc1YzAgLjQxNC0uMzM2Ljc1LS43NS43NXMtLjc1LS4zMzYtLjc1LS43NXYtMy43NWMwLTMuMzA5IDIuNjkxLTYgNi02czYgMi42OTEgNiA2djMuNzVjMCAuNDE0LS4zMzYuNzUtLjc1Ljc1eiIvPjxwYXRoIGQ9Im0xMiAxN2MtMS4xMDMgMC0yLS44OTctMi0ycy44OTctMiAyLTIgMiAuODk3IDIgMi0uODk3IDItMiAyem0wLTIuNWMtLjI3NSAwLS41LjIyNC0uNS41cy4yMjUuNS41LjUuNS0uMjI0LjUtLjUtLjIyNS0uNS0uNS0uNXoiLz48cGF0aCBkPSJtMTIgMjBjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1di0yLjc1YzAtLjQxNC4zMzYtLjc1Ljc1LS43NXMuNzUuMzM2Ljc1Ljc1djIuNzVjMCAuNDE0LS4zMzYuNzUtLjc1Ljc1eiIvPjwvc3ZnPg==',
    depositPasswordBtn = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgaWQ9ImJvbGQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im0xOC43NSA5aC0uNzV2LTNjMC0zLjMwOS0yLjY5MS02LTYtNnMtNiAyLjY5MS02IDZ2M2gtLjc1Yy0xLjI0IDAtMi4yNSAxLjAwOS0yLjI1IDIuMjV2MTAuNWMwIDEuMjQxIDEuMDEgMi4yNSAyLjI1IDIuMjVoMTMuNWMxLjI0IDAgMi4yNS0xLjAwOSAyLjI1LTIuMjV2LTEwLjVjMC0xLjI0MS0xLjAxLTIuMjUtMi4yNS0yLjI1em0tMTAuNzUtM2MwLTIuMjA2IDEuNzk0LTQgNC00czQgMS43OTQgNCA0djNoLTh6bTUgMTAuNzIydjIuMjc4YzAgLjU1Mi0uNDQ3IDEtMSAxcy0xLS40NDgtMS0xdi0yLjI3OGMtLjU5NS0uMzQ3LTEtLjk4NS0xLTEuNzIyIDAtMS4xMDMuODk3LTIgMi0yczIgLjg5NyAyIDJjMCAuNzM3LS40MDUgMS4zNzUtMSAxLjcyMnoiLz48L3N2Zz4=',
    depositQuestionMark = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM1ODU4NTgiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPGNpcmNsZSBjeD0iMjU2IiBjeT0iMzc4LjUiIHI9IjI1Ii8+DQoJCQk8cGF0aCBkPSJNMjU2LDBDMTE0LjUxNiwwLDAsMTE0LjQ5NywwLDI1NmMwLDE0MS40ODQsMTE0LjQ5NywyNTYsMjU2LDI1NmMxNDEuNDg0LDAsMjU2LTExNC40OTcsMjU2LTI1Ng0KCQkJCUM1MTIsMTE0LjUxNiwzOTcuNTAzLDAsMjU2LDB6IE0yNTYsNDcyYy0xMTkuMzc3LDAtMjE2LTk2LjYwNy0yMTYtMjE2YzAtMTE5LjM3Nyw5Ni42MDctMjE2LDIxNi0yMTYNCgkJCQljMTE5LjM3NywwLDIxNiw5Ni42MDcsMjE2LDIxNkM0NzIsMzc1LjM3NywzNzUuMzkzLDQ3MiwyNTYsNDcyeiIvPg0KCQkJPHBhdGggZD0iTTI1NiwxMjguNWMtNDQuMTEyLDAtODAsMzUuODg4LTgwLDgwYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwczIwLTguOTU0LDIwLTIwYzAtMjIuMDU2LDE3Ljk0NC00MCw0MC00MA0KCQkJCWMyMi4wNTYsMCw0MCwxNy45NDQsNDAsNDBjMCwyMi4wNTYtMTcuOTQ0LDQwLTQwLDQwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMHY1MGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMA0KCQkJCWMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMHYtMzIuNTMxYzM0LjQ2Ni04LjkwMyw2MC00MC4yNiw2MC03Ny40NjlDMzM2LDE2NC4zODgsMzAwLjExMiwxMjguNSwyNTYsMTI4LjV6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
    depositSponsor1 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTA0IDUwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTA0IDUwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzNDNThCRjsiIHBvaW50cz0iMTg0LjgsMzI0LjQgMjEwLjQsMTgwLjQgMjUwLjQsMTgwLjQgMjI1LjYsMzI0LjQgIi8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojMjkzNjg4OyIgcG9pbnRzPSIxODQuOCwzMjQuNCAyMTcuNiwxODAuNCAyNTAuNCwxODAuNCAyMjUuNiwzMjQuNCAiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQzU4QkY7IiBkPSJNMzcwLjQsMTgyYy04LTMuMi0yMC44LTYuNC0zNi44LTYuNGMtNDAsMC02OC44LDIwLTY4LjgsNDguOGMwLDIxLjYsMjAsMzIuOCwzNiw0MA0KCXMyMC44LDEyLDIwLjgsMTguNGMwLDkuNi0xMi44LDE0LjQtMjQsMTQuNGMtMTYsMC0yNC44LTIuNC0zOC40LThsLTUuNi0yLjRsLTUuNiwzMi44YzkuNiw0LDI3LjIsOCw0NS42LDgNCgljNDIuNCwwLDcwLjQtMjAsNzAuNC01MC40YzAtMTYuOC0xMC40LTI5LjYtMzQuNC00MGMtMTQuNC03LjItMjMuMi0xMS4yLTIzLjItMTguNGMwLTYuNCw3LjItMTIuOCwyMy4yLTEyLjgNCgljMTMuNiwwLDIzLjIsMi40LDMwLjQsNS42bDQsMS42TDM3MC40LDE4MkwzNzAuNCwxODJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjkzNjg4OyIgZD0iTTM3MC40LDE4MmMtOC0zLjItMjAuOC02LjQtMzYuOC02LjRjLTQwLDAtNjEuNiwyMC02MS42LDQ4LjhjMCwyMS42LDEyLjgsMzIuOCwyOC44LDQwDQoJczIwLjgsMTIsMjAuOCwxOC40YzAsOS42LTEyLjgsMTQuNC0yNCwxNC40Yy0xNiwwLTI0LjgtMi40LTM4LjQtOGwtNS42LTIuNGwtNS42LDMyLjhjOS42LDQsMjcuMiw4LDQ1LjYsOA0KCWM0Mi40LDAsNzAuNC0yMCw3MC40LTUwLjRjMC0xNi44LTEwLjQtMjkuNi0zNC40LTQwYy0xNC40LTcuMi0yMy4yLTExLjItMjMuMi0xOC40YzAtNi40LDcuMi0xMi44LDIzLjItMTIuOA0KCWMxMy42LDAsMjMuMiwyLjQsMzAuNCw1LjZsNCwxLjZMMzcwLjQsMTgyTDM3MC40LDE4MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQzU4QkY7IiBkPSJNNDM5LjIsMTgwLjRjLTkuNiwwLTE2LjgsMC44LTIwLjgsMTAuNGwtNjAsMTMzLjZoNDMuMmw4LTI0aDUxLjJsNC44LDI0SDUwNGwtMzMuNi0xNDRINDM5LjJ6DQoJIE00MjAuOCwyNzYuNGMyLjQtNy4yLDE2LTQyLjQsMTYtNDIuNHMzLjItOC44LDUuNi0xNC40bDIuNCwxMy42YzAsMCw4LDM2LDkuNiw0NGgtMzMuNlYyNzYuNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMyOTM2ODg7IiBkPSJNNDQ4LjgsMTgwLjRjLTkuNiwwLTE2LjgsMC44LTIwLjgsMTAuNGwtNjkuNiwxMzMuNmg0My4ybDgtMjRoNTEuMmw0LjgsMjRINTA0bC0zMy42LTE0NEg0NDguOHoNCgkgTTQyMC44LDI3Ni40YzMuMi04LDE2LTQyLjQsMTYtNDIuNHMzLjItOC44LDUuNi0xNC40bDIuNCwxMy42YzAsMCw4LDM2LDkuNiw0NGgtMzMuNlYyNzYuNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQzU4QkY7IiBkPSJNMTExLjIsMjgxLjJsLTQtMjAuOGMtNy4yLTI0LTMwLjQtNTAuNC01Ni02My4ybDM2LDEyOGg0My4ybDY0LjgtMTQ0SDE1MkwxMTEuMiwyODEuMnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMyOTM2ODg7IiBkPSJNMTExLjIsMjgxLjJsLTQtMjAuOGMtNy4yLTI0LTMwLjQtNTAuNC01Ni02My4ybDM2LDEyOGg0My4ybDY0LjgtMTQ0SDE2MEwxMTEuMiwyODEuMnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkJDMDA7IiBkPSJNMCwxODAuNGw3LjIsMS42YzUxLjIsMTIsODYuNCw0Mi40LDEwMCw3OC40bC0xNC40LTY4Yy0yLjQtOS42LTkuNi0xMi0xOC40LTEySDB6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjc5ODFEOyIgZD0iTTAsMTgwLjRMMCwxODAuNGM1MS4yLDEyLDkzLjYsNDMuMiwxMDcuMiw3OS4ybC0xMy42LTU2LjhjLTIuNC05LjYtMTAuNC0xNS4yLTE5LjItMTUuMkwwLDE4MC40eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VEN0MwMDsiIGQ9Ik0wLDE4MC40TDAsMTgwLjRjNTEuMiwxMiw5My42LDQzLjIsMTA3LjIsNzkuMmwtOS42LTMxLjJjLTIuNC05LjYtNS42LTE5LjItMTYuOC0yMy4yTDAsMTgwLjR6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDUxMjQ0OyIgZD0iTTE1MS4yLDI3Ni40TDEyNCwyNDkuMmwtMTIuOCwzMC40bC0zLjItMjBjLTcuMi0yNC0zMC40LTUwLjQtNTYtNjMuMmwzNiwxMjhoNDMuMkwxNTEuMiwyNzYuNHoiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMDUxMjQ0OyIgcG9pbnRzPSIyMjUuNiwzMjQuNCAxOTEuMiwyODkuMiAxODQuOCwzMjQuNCAJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzA1MTI0NDsiIGQ9Ik0zMTcuNiwyNzQuOEwzMTcuNiwyNzQuOGMzLjIsMy4yLDQuOCw1LjYsNCw4LjhjMCw5LjYtMTIuOCwxNC40LTI0LDE0LjRjLTE2LDAtMjQuOC0yLjQtMzguNC04DQoJCWwtNS42LTIuNGwtNS42LDMyLjhjOS42LDQsMjcuMiw4LDQ1LjYsOGMyNS42LDAsNDYuNC03LjIsNTguNC0yMEwzMTcuNiwyNzQuOHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDUxMjQ0OyIgZD0iTTM2NCwzMjQuNGgzNy42bDgtMjRoNTEuMmw0LjgsMjRINTA0TDQ5MC40LDI2NmwtNDgtNDYuNGwyLjQsMTIuOGMwLDAsOCwzNiw5LjYsNDRoLTMzLjYNCgkJYzMuMi04LDE2LTQyLjQsMTYtNDIuNHMzLjItOC44LDUuNi0xNC40Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
    depositSponsor2 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTA0IDUwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTA0IDUwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQjYwMDsiIGQ9Ik01MDQsMjUyYzAsODMuMi02Ny4yLDE1MS4yLTE1MS4yLDE1MS4yYy04My4yLDAtMTUxLjItNjgtMTUxLjItMTUxLjJsMCwwDQoJYzAtODMuMiw2Ny4yLTE1MS4yLDE1MC40LTE1MS4yQzQzNi44LDEwMC44LDUwNCwxNjguOCw1MDQsMjUyTDUwNCwyNTJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjc5ODFEOyIgZD0iTTM1Mi44LDEwMC44YzgzLjIsMCwxNTEuMiw2OCwxNTEuMiwxNTEuMmwwLDBjMCw4My4yLTY3LjIsMTUxLjItMTUxLjIsMTUxLjINCgljLTgzLjIsMC0xNTEuMi02OC0xNTEuMi0xNTEuMiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGODUwMDsiIGQ9Ik0zNTIuOCwxMDAuOGM4My4yLDAsMTUxLjIsNjgsMTUxLjIsMTUxLjJsMCwwYzAsODMuMi02Ny4yLDE1MS4yLTE1MS4yLDE1MS4yIi8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkY1MDUwOyIgZD0iTTE0OS42LDEwMC44QzY3LjIsMTAxLjYsMCwxNjguOCwwLDI1MnM2Ny4yLDE1MS4yLDE1MS4yLDE1MS4yYzM5LjIsMCw3NC40LTE1LjIsMTAxLjYtMzkuMmwwLDBsMCwwDQoJYzUuNi00LjgsMTAuNC0xMC40LDE1LjItMTZoLTMxLjJjLTQtNC44LTgtMTAuNC0xMS4yLTE1LjJoNTMuNmMzLjItNC44LDYuNC0xMC40LDguOC0xNmgtNzEuMmMtMi40LTQuOC00LjgtMTAuNC02LjQtMTZoODMuMg0KCWM0LjgtMTUuMiw4LTMxLjIsOC00OGMwLTExLjItMS42LTIxLjYtMy4yLTMyaC05Mi44YzAuOC01LjYsMi40LTEwLjQsNC0xNmg4My4yYy0xLjYtNS42LTQtMTEuMi02LjQtMTZIMjE2DQoJYzIuNC01LjYsNS42LTEwLjQsOC44LTE2aDUzLjZjLTMuMi01LjYtNy4yLTExLjItMTItMTZoLTI5LjZjNC44LTUuNiw5LjYtMTAuNCwxNS4yLTE1LjJjLTI2LjQtMjQuOC02Mi40LTM5LjItMTAxLjYtMzkuMg0KCUMxNTAuNCwxMDAuOCwxNTAuNCwxMDAuOCwxNDkuNiwxMDAuOHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFNTI4MzY7IiBkPSJNMCwyNTJjMCw4My4yLDY3LjIsMTUxLjIsMTUxLjIsMTUxLjJjMzkuMiwwLDc0LjQtMTUuMiwxMDEuNi0zOS4ybDAsMGwwLDANCgljNS42LTQuOCwxMC40LTEwLjQsMTUuMi0xNmgtMzEuMmMtNC00LjgtOC0xMC40LTExLjItMTUuMmg1My42YzMuMi00LjgsNi40LTEwLjQsOC44LTE2aC03MS4yYy0yLjQtNC44LTQuOC0xMC40LTYuNC0xNmg4My4yDQoJYzQuOC0xNS4yLDgtMzEuMiw4LTQ4YzAtMTEuMi0xLjYtMjEuNi0zLjItMzJoLTkyLjhjMC44LTUuNiwyLjQtMTAuNCw0LTE2aDgzLjJjLTEuNi01LjYtNC0xMS4yLTYuNC0xNkgyMTYNCgljMi40LTUuNiw1LjYtMTAuNCw4LjgtMTZoNTMuNmMtMy4yLTUuNi03LjItMTEuMi0xMi0xNmgtMjkuNmM0LjgtNS42LDkuNi0xMC40LDE1LjItMTUuMmMtMjYuNC0yNC44LTYyLjQtMzkuMi0xMDEuNi0zOS4yaC0wLjgiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNDQjIwMjY7IiBkPSJNMTUxLjIsNDAzLjJjMzkuMiwwLDc0LjQtMTUuMiwxMDEuNi0zOS4ybDAsMGwwLDBjNS42LTQuOCwxMC40LTEwLjQsMTUuMi0xNmgtMzEuMg0KCWMtNC00LjgtOC0xMC40LTExLjItMTUuMmg1My42YzMuMi00LjgsNi40LTEwLjQsOC44LTE2aC03MS4yYy0yLjQtNC44LTQuOC0xMC40LTYuNC0xNmg4My4yYzQuOC0xNS4yLDgtMzEuMiw4LTQ4DQoJYzAtMTEuMi0xLjYtMjEuNi0zLjItMzJoLTkyLjhjMC44LTUuNiwyLjQtMTAuNCw0LTE2aDgzLjJjLTEuNi01LjYtNC0xMS4yLTYuNC0xNkgyMTZjMi40LTUuNiw1LjYtMTAuNCw4LjgtMTZoNTMuNg0KCWMtMy4yLTUuNi03LjItMTEuMi0xMi0xNmgtMjkuNmM0LjgtNS42LDkuNi0xMC40LDE1LjItMTUuMmMtMjYuNC0yNC44LTYyLjQtMzkuMi0xMDEuNi0zOS4yaC0wLjgiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjA0LjgsMjkwLjRsMi40LTEzLjZjLTAuOCwwLTIuNCwwLjgtNCwwLjhjLTUuNiwwLTYuNC0zLjItNS42LTQuOGw0LjgtMjhoOC44bDIuNC0xNS4yaC04bDEuNi05LjYNCgkJaC0xNmMwLDAtOS42LDUyLjgtOS42LDU5LjJjMCw5LjYsNS42LDEzLjYsMTIuOCwxMy42QzE5OS4yLDI5Mi44LDIwMy4yLDI5MS4yLDIwNC44LDI5MC40eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjEwLjQsMjY0LjhjMCwyMi40LDE1LjIsMjgsMjgsMjhjMTIsMCwxNi44LTIuNCwxNi44LTIuNGwzLjItMTUuMmMwLDAtOC44LDQtMTYuOCw0DQoJCWMtMTcuNiwwLTE0LjQtMTIuOC0xNC40LTEyLjhIMjYwYzAsMCwyLjQtMTAuNCwyLjQtMTQuNGMwLTEwLjQtNS42LTIzLjItMjMuMi0yMy4yQzIyMi40LDIyNy4yLDIxMC40LDI0NC44LDIxMC40LDI2NC44eg0KCQkgTTIzOC40LDI0MS42YzguOCwwLDcuMiwxMC40LDcuMiwxMS4ySDIyOEMyMjgsMjUyLDIyOS42LDI0MS42LDIzOC40LDI0MS42eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzQwLDI5MC40bDMuMi0xNy42YzAsMC04LDQtMTMuNiw0Yy0xMS4yLDAtMTYtOC44LTE2LTE4LjRjMC0xOS4yLDkuNi0yOS42LDIwLjgtMjkuNg0KCQljOCwwLDE0LjQsNC44LDE0LjQsNC44bDIuNC0xNi44YzAsMC05LjYtNC0xOC40LTRjLTE4LjQsMC0zNi44LDE2LTM2LjgsNDYuNGMwLDIwLDkuNiwzMy42LDI4LjgsMzMuNg0KCQlDMzMxLjIsMjkyLjgsMzQwLDI5MC40LDM0MCwyOTAuNHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTExNi44LDIyNy4yYy0xMS4yLDAtMTkuMiwzLjItMTkuMiwzLjJMOTUuMiwyNDRjMCwwLDcuMi0zLjIsMTcuNi0zLjJjNS42LDAsMTAuNCwwLjgsMTAuNCw1LjYNCgkJYzAsMy4yLTAuOCw0LTAuOCw0cy00LjgsMC03LjIsMGMtMTMuNiwwLTI4LjgsNS42LTI4LjgsMjRjMCwxNC40LDkuNiwxNy42LDE1LjIsMTcuNmMxMS4yLDAsMTYtNy4yLDE2LjgtNy4ybC0wLjgsNi40SDEzMmw2LjQtNDQNCgkJQzEzOC40LDIyOCwxMjIuNCwyMjcuMiwxMTYuOCwyMjcuMnogTTEyMCwyNjMuMmMwLDIuNC0xLjYsMTUuMi0xMS4yLDE1LjJjLTQuOCwwLTYuNC00LTYuNC02LjRjMC00LDIuNC05LjYsMTQuNC05LjYNCgkJQzExOS4yLDI2My4yLDEyMCwyNjMuMiwxMjAsMjYzLjJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xNTMuNiwyOTJjNCwwLDI0LDAuOCwyNC0yMC44YzAtMjAtMTkuMi0xNi0xOS4yLTI0YzAtNCwzLjItNS42LDguOC01LjZjMi40LDAsMTEuMiwwLjgsMTEuMiwwLjgNCgkJbDIuNC0xNC40YzAsMC01LjYtMS42LTE1LjItMS42Yy0xMiwwLTI0LDQuOC0yNCwyMC44YzAsMTguNCwyMCwxNi44LDIwLDI0YzAsNC44LTUuNiw1LjYtOS42LDUuNmMtNy4yLDAtMTQuNC0yLjQtMTQuNC0yLjQNCgkJbC0yLjQsMTQuNEMxMzYsMjkwLjQsMTQwLDI5MiwxNTMuNiwyOTJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik00NzIuOCwyMTQuNGwtMy4yLDIxLjZjMCwwLTYuNC04LTE1LjItOGMtMTQuNCwwLTI3LjIsMTcuNi0yNy4yLDM4LjRjMCwxMi44LDYuNCwyNi40LDIwLDI2LjQNCgkJYzkuNiwwLDE1LjItNi40LDE1LjItNi40bC0wLjgsNS42aDE2bDEyLTc2LjhMNDcyLjgsMjE0LjR6IE00NjUuNiwyNTYuOGMwLDguOC00LDIwLTEyLjgsMjBjLTUuNiwwLTguOC00LjgtOC44LTEyLjgNCgkJYzAtMTIuOCw1LjYtMjAuOCwxMi44LTIwLjhDNDYyLjQsMjQzLjIsNDY1LjYsMjQ3LjIsNDY1LjYsMjU2Ljh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yOS42LDI5MS4ybDkuNi01Ny42bDEuNiw1Ny42SDUybDIwLjgtNTcuNkw2NCwyOTEuMmgxNi44bDEyLjgtNzYuOEg2Ny4ybC0xNiw0Ny4ybC0wLjgtNDcuMkgyNy4yDQoJCWwtMTIuOCw3Ni44SDI5LjZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yNzcuNiwyOTEuMmM0LjgtMjYuNCw1LjYtNDgsMTYuOC00NGMxLjYtMTAuNCw0LTE0LjQsNS42LTE4LjRjMCwwLTAuOCwwLTMuMiwwDQoJCWMtNy4yLDAtMTIuOCw5LjYtMTIuOCw5LjZsMS42LTguOGgtMTUuMkwyNjAsMjkyaDE3LjZWMjkxLjJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zNzYuOCwyMjcuMmMtMTEuMiwwLTE5LjIsMy4yLTE5LjIsMy4ybC0yLjQsMTMuNmMwLDAsNy4yLTMuMiwxNy42LTMuMmM1LjYsMCwxMC40LDAuOCwxMC40LDUuNg0KCQljMCwzLjItMC44LDQtMC44LDRzLTQuOCwwLTcuMiwwYy0xMy42LDAtMjguOCw1LjYtMjguOCwyNGMwLDE0LjQsOS42LDE3LjYsMTUuMiwxNy42YzExLjIsMCwxNi03LjIsMTYuOC03LjJsLTAuOCw2LjRIMzkybDYuNC00NA0KCQlDMzk5LjIsMjI4LDM4Mi40LDIyNy4yLDM3Ni44LDIyNy4yeiBNMzgwLjgsMjYzLjJjMCwyLjQtMS42LDE1LjItMTEuMiwxNS4yYy00LjgsMC02LjQtNC02LjQtNi40YzAtNCwyLjQtOS42LDE0LjQtOS42DQoJCUMzODAsMjYzLjIsMzgwLDI2My4yLDM4MC44LDI2My4yeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNDEyLDI5MS4yYzQuOC0yNi40LDUuNi00OCwxNi44LTQ0YzEuNi0xMC40LDQtMTQuNCw1LjYtMTguNGMwLDAtMC44LDAtMy4yLDANCgkJYy03LjIsMC0xMi44LDkuNi0xMi44LDkuNmwxLjYtOC44aC0xNS4yTDM5NC40LDI5Mkg0MTJWMjkxLjJ6Ii8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRENFNUU1OyIgZD0iTTE4MCwyNzkuMmMwLDkuNiw1LjYsMTMuNiwxMi44LDEzLjZjNS42LDAsMTAuNC0xLjYsMTItMi40bDIuNC0xMy42Yy0wLjgsMC0yLjQsMC44LTQsMC44DQoJCWMtNS42LDAtNi40LTMuMi01LjYtNC44bDQuOC0yOGg4LjhsMi40LTE1LjJoLThsMS42LTkuNiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEQ0U1RTU7IiBkPSJNMjE4LjQsMjY0LjhjMCwyMi40LDcuMiwyOCwyMCwyOGMxMiwwLDE2LjgtMi40LDE2LjgtMi40bDMuMi0xNS4yYzAsMC04LjgsNC0xNi44LDQNCgkJYy0xNy42LDAtMTQuNC0xMi44LTE0LjQtMTIuOEgyNjBjMCwwLDIuNC0xMC40LDIuNC0xNC40YzAtMTAuNC01LjYtMjMuMi0yMy4yLTIzLjJDMjIyLjQsMjI3LjIsMjE4LjQsMjQ0LjgsMjE4LjQsMjY0Ljh6DQoJCSBNMjM4LjQsMjQxLjZjOC44LDAsMTAuNCwxMC40LDEwLjQsMTEuMkgyMjhDMjI4LDI1MiwyMjkuNiwyNDEuNiwyMzguNCwyNDEuNnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRENFNUU1OyIgZD0iTTM0MCwyOTAuNGwzLjItMTcuNmMwLDAtOCw0LTEzLjYsNGMtMTEuMiwwLTE2LTguOC0xNi0xOC40YzAtMTkuMiw5LjYtMjkuNiwyMC44LTI5LjYNCgkJYzgsMCwxNC40LDQuOCwxNC40LDQuOGwyLjQtMTYuOGMwLDAtOS42LTQtMTguNC00Yy0xOC40LDAtMjguOCwxNi0yOC44LDQ2LjRjMCwyMCwxLjYsMzMuNiwyMC44LDMzLjYNCgkJQzMzMS4yLDI5Mi44LDM0MCwyOTAuNCwzNDAsMjkwLjR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0RDRTVFNTsiIGQ9Ik05NS4yLDI0NC44YzAsMCw3LjItMy4yLDE3LjYtMy4yYzUuNiwwLDEwLjQsMC44LDEwLjQsNS42YzAsMy4yLTAuOCw0LTAuOCw0cy00LjgsMC03LjIsMA0KCQljLTEzLjYsMC0yOC44LDUuNi0yOC44LDI0YzAsMTQuNCw5LjYsMTcuNiwxNS4yLDE3LjZjMTEuMiwwLDE2LTcuMiwxNi44LTcuMmwtMC44LDYuNEgxMzJsNi40LTQ0YzAtMTguNC0xNi0xOS4yLTIyLjQtMTkuMg0KCQkgTTEyOCwyNjMuMmMwLDIuNC05LjYsMTUuMi0xOS4yLDE1LjJjLTQuOCwwLTYuNC00LTYuNC02LjRjMC00LDIuNC05LjYsMTQuNC05LjZDMTE5LjIsMjYzLjIsMTI4LDI2My4yLDEyOCwyNjMuMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRENFNUU1OyIgZD0iTTEzNiwyOTAuNGMwLDAsNC44LDEuNiwxOC40LDEuNmM0LDAsMjQsMC44LDI0LTIwLjhjMC0yMC0xOS4yLTE2LTE5LjItMjRjMC00LDMuMi01LjYsOC44LTUuNg0KCQljMi40LDAsMTEuMiwwLjgsMTEuMiwwLjhsMi40LTE0LjRjMCwwLTUuNi0xLjYtMTUuMi0xLjZjLTEyLDAtMTYsNC44LTE2LDIwLjhjMCwxOC40LDEyLDE2LjgsMTIsMjRjMCw0LjgtNS42LDUuNi05LjYsNS42Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0RDRTVFNTsiIGQ9Ik00NjkuNiwyMzZjMCwwLTYuNC04LTE1LjItOGMtMTQuNCwwLTE5LjIsMTcuNi0xOS4yLDM4LjRjMCwxMi44LTEuNiwyNi40LDEyLDI2LjQNCgkJYzkuNiwwLDE1LjItNi40LDE1LjItNi40bC0wLjgsNS42aDE2bDEyLTc2LjggTTQ2OC44LDI1Ni44YzAsOC44LTcuMiwyMC0xNiwyMGMtNS42LDAtOC44LTQuOC04LjgtMTIuOGMwLTEyLjgsNS42LTIwLjgsMTIuOC0yMC44DQoJCUM0NjIuNCwyNDMuMiw0NjguOCwyNDcuMiw0NjguOCwyNTYuOHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRENFNUU1OyIgZD0iTTI5LjYsMjkxLjJsOS42LTU3LjZsMS42LDU3LjZINTJsMjAuOC01Ny42TDY0LDI5MS4yaDE2LjhsMTIuOC03Ni44aC0yMGwtMjIuNCw0Ny4ybC0wLjgtNDcuMmgtOC44DQoJCWwtMjcuMiw3Ni44SDI5LjZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0RDRTVFNTsiIGQ9Ik0yNjAuOCwyOTEuMmgxNi44YzQuOC0yNi40LDUuNi00OCwxNi44LTQ0YzEuNi0xMC40LDQtMTQuNCw1LjYtMTguNGMwLDAtMC44LDAtMy4yLDANCgkJYy03LjIsMC0xMi44LDkuNi0xMi44LDkuNmwxLjYtOC44Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0RDRTVFNTsiIGQ9Ik0zNTUuMiwyNDQuOGMwLDAsNy4yLTMuMiwxNy42LTMuMmM1LjYsMCwxMC40LDAuOCwxMC40LDUuNmMwLDMuMi0wLjgsNC0wLjgsNHMtNC44LDAtNy4yLDANCgkJYy0xMy42LDAtMjguOCw1LjYtMjguOCwyNGMwLDE0LjQsOS42LDE3LjYsMTUuMiwxNy42YzExLjIsMCwxNi03LjIsMTYuOC03LjJsLTAuOCw2LjRIMzkybDYuNC00NGMwLTE4LjQtMTYtMTkuMi0yMi40LTE5LjINCgkJIE0zODgsMjYzLjJjMCwyLjQtOS42LDE1LjItMTkuMiwxNS4yYy00LjgsMC02LjQtNC02LjQtNi40YzAtNCwyLjQtOS42LDE0LjQtOS42QzM4MCwyNjMuMiwzODgsMjYzLjIsMzg4LDI2My4yeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEQ0U1RTU7IiBkPSJNMzk1LjIsMjkxLjJINDEyYzQuOC0yNi40LDUuNi00OCwxNi44LTQ0YzEuNi0xMC40LDQtMTQuNCw1LjYtMTguNGMwLDAtMC44LDAtMy4yLDANCgkJYy03LjIsMC0xMi44LDkuNi0xMi44LDkuNmwxLjYtOC44Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
    depositSponsor3 = '',
    sponsorLogo4 = ''
backgroundImg = ''
    ;
// replace array (posible to add img as file)
let cards = [depositSponsor1, depositSponsor2];


const cssTemplate = `#deposit_screen{position:relative} .deposit-card,.deposit-card *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.deposit-card{max-width:420px;max-height: 500px;font-size:21px;color:#000;height: fit-content;position:absolute;top: 0%;left: -60%;right: 0;bottom:0;display:flex;width:444px;min-height:390px;background: #f3f5f7;border-radius: 10px;margin: auto;pointer-events:none;user-select:none} @-moz-document url-prefix(){.deposit-card{top:-60%;-webkit-top:-35%;-moz-top:-35%;}} .deposit-card--body-group,.deposit-card--footer-group,.deposit-card--header-group{display:flex;width:100%}.deposit-card--body-group,.deposit-card--footer-group{flex-direction:column}.deposit-card--header-group .deposit-card--header-sponsor{height:auto;border-radius: 5px;border: 1px solid #E1E1E2;display:flex;align-items:center;justify-content:center;width:100%;background:#fff;max-width:50px;}.deposit-card--header-group .deposit-card--header-sponsor img{display:block;height:auto;max-width:30px}.deposit-card--header-group .deposit-card--header-sponsor{margin-right: 10px;margin: 5px 5px 5px 5px;padding:2px;}.deposit-card--header-sponsor:last-child{margin-right:0!important;}.deposit-card--header-group-sponsors{flex-wrap:wrap;}.deposit-card--header-question{max-width:23px;height:auto}.deposit-card--container{padding:15px;width:100%;flex-direction:column;align-items:center;display:flex}.deposit-card--header{width:100%;justify-content:space-between;margin-bottom:3px}.deposit-card--first-block{align-items:center;justify-content:space-between;margin-bottom:8px}.deposit-card--first-block span{ font-style: normal; font-weight: normal; font-size: 20px; line-height: 18px;}.deposit-card--body{width:100%;display:flex;flex-direction:column}.deposit-card--body-title,.deposit-card--footer-title{margin-bottom:10px;display:block}.deposit-card--body-group-big .deposit-card--secret-text{padding:20px 60px 20px 15px;} .deposit-card--secret-text{white-space: nowrap; font-weight:700;overflow: hidden;min-height:55px;background:#fff;display:flex;align-items:center;padding:20px 15px 20px 15px;color:#4c4b4b;position:relative;border:1px solid #c7c7c7;border-radius:5px}.deposit-card--body-group-big .deposit-card--secret-text:after{content:'';position:absolute;right:-1px;background:#c7c7c7 url(${depositCardSecretTextDown}) no-repeat;background-position:center;-webkit-background-size:15px;background-size:15px;width:60px;height:63.2px;border-radius:0 4px 4px 0}.deposit-card--body-group-small,.deposit-card--footer{flex-direction:row;display:flex;align-items:flex-end;margin-top:15px}.deposit-card--body-group-small .deposit-card--body-group-small-img-1{margin-left:5px;max-width:30px;display:block;height:59.2px}.deposit-card--body-group-small .deposit-card--body-group-small-img-2{margin-left:5px;max-width:23px;display:block;height:59.2px}.deposit-card--body-group-1{max-width:170px}.deposit-card--body-group-2{margin-left:10px}.deposit-card--body-title,.deposit-card--footer-title{font-size:14px;color: #696A6A;}.deposit-card--body-group-2 .deposit-card--secret-text{background:#fff url(${depositPassword}) no-repeat;-webkit-background-size:20px;background-size:20px;background-position:85% 50%}.deposit-card--footer .deposit-card--footer-group-1{max-width:130px;position:relative}.deposit-card--footer .deposit-card--footer-group-2{max-width:220px;margin-left:auto;position:relative}.deposit-card--footer{width:100%;display:flex;flex-direction:row}.deposit-card--footer .deposit-card--secret-text{ font-style: normal; font-weight: normal; font-size: 25px; line-height: 15px;border: 2px solid #199749;background: rgba(25, 151, 73, 0.1);position:relative}.deposit-card--footer-button{padding:5px;text-align:center;min-height:65px;width:100%;display:flex;align-items:center;justify-content:center;background: #199749; border-radius: 5px;margin-top:14px;border-radius:4px;color:#fff;font-size:18px;position:relative}.deposit-card--footer-button img{max-width:24px;height:auto;filter:brightness(3);margin-left:10px}.deposit-arrow{position:absolute;z-index:1}.deposit-arrow-1{transform:rotate(150deg);left:-53px;top:70px;display:none}.deposit-arrow-2{right:0px;top:-20px;display:none}.deposit-card--footer-button .deposit-arrow-3{max-width:100%;filter:unset;margin-left:0;right:0;top:30px;transform:rotate(45deg);display:none}@media (max-width:460px){.deposit-card{font-size:17px;}.deposit-card--body-title, .deposit-card--footer-title{font-size:13px;}.deposit-card--footer .deposit-card--footer-group-1{max-width:110px}.deposit-card--footer .deposit-card--footer-group-2{max-width:275px}.deposit-card--body-group-1{max-width:140px}.deposit-card--body-group-2{max-width:165px}.deposit-card--container{padding:10px 15px}.deposit-card--first-block span{font-size:18px}}@media (max-width:400px){.deposit-card--footer .deposit-card--footer-group-1{max-width:90px}.deposit-card--footer .deposit-card--footer-group-2{max-width:285px}.deposit-card--container{padding:10px 15px}}@media (max-width:385px){.deposit-card--body-group-1{max-width:130px}.deposit-card--body-group-2{max-width:155px}.deposit-card--body-group-small .deposit-card--body-group-small-img-2{max-width:19px}.deposit-card--body-group-small .deposit-card--body-group-small-img-1{max-width:23px}.deposit-card--body-title,.deposit-card--footer-title{font-size:12px}}@media (max-width:360px){.deposit-card--body-group-small, .deposit-card--footer{margin-top:20px;}.deposit-arrow{max-width:70px!important}.deposit-card--body-group-big .deposit-card--secret-text{padding:17px 60px 17px 15px;}.deposit-card--secret-text{padding:10px 5px 10px 5px}.deposit-card--body-group-big .deposit-card--secret-text:after{height:55px}.deposit-card--first-block span{font-size:16px}.deposit-card--footer-button .deposit-arrow-3{top:50px}}@media (max-width:359px){.deposit-card--first-block span{font-size:15px}.deposit-card--body-title,.deposit-card--footer-title{font-size:10px}}.deposit-card--body-group-2 {max-width: 130px;}} @media (max-width:480px){.deposit-card{min-height: 522px;}}`;
const htmlTemplate = `<div class="deposit-card"> <div class="deposit-card--container"> <div class="deposit-card--header"> <div class="deposit-card--header-group deposit-card--first-block"> <span class="deposit-card--header-title"> ${textTemplate.header} </span>  </div><div class="deposit-card--header-group deposit-card--header-group-sponsors"> ${cards.map(function (el, i) { return '<div class="deposit-card--header-sponsor"><img src="' + el + '" alt="Sponsor' + i + '"></div>' }).join('')}</div></div><div class="deposit-card--body"> <div class="deposit-card--body-group-big"> <span class="deposit-card--body-title"> ${textTemplate.input.cardNumber.titleText}</span> <div class="deposit-card--body-input"> <span class="deposit-card--secret-text"> ${textTemplate.input.cardNumber.inputText} </span> </div></div><div class="deposit-card--body-group-small"> <div class="deposit-card--body-group deposit-card--body-group-1"> <span class="deposit-card--body-title"> ${textTemplate.input.expirationDate.titleText} </span> <div class="deposit-card--body-input"> <span class="deposit-card--secret-text"> ${textTemplate.input.expirationDate.inputText} </span> </div></div><div class="deposit-card--body-group deposit-card--body-group-2"> <span class="deposit-card--body-title"> ${textTemplate.input.cardSecurityCode.titleText} </span> <div class="deposit-card--body-input"> <span class="deposit-card--secret-text"> ${textTemplate.input.cardSecurityCode.inputText} </span> </div></div> </div></div><div class="deposit-card--footer"> <div class="deposit-card--footer-group deposit-card--footer-group-1"> <span class="deposit-card--footer-title"> ${textTemplate.input.amount.titleText} </span> <div class="deposit-card--footer-input"> <img src="${depositArrow}" alt="Arrow" class="deposit-arrow deposit-arrow-1"> <span class="deposit-card--secret-text"> ${textTemplate.input.amount.inputText[0]}  </span> </div></div><div class="deposit-card--footer-group deposit-card--footer-group-2"> <div class="deposit-card--footer-input"> <img src="${depositArrow}" alt="Arrow" class="deposit-arrow deposit-arrow-2"> <span class="deposit-card--secret-text"> ${textTemplate.input.amount.inputText[1]} </span> </div></div></div><div class="deposit-card--footer-button"> ${textTemplate.button} <img src="${depositPasswordBtn}" alt="password"> <img src="${depositArrow}" alt="Arrow" class="deposit-arrow deposit-arrow-3"> </div></div></div>`;

const divElement = document.getElementById('deposit_screen');

divElement.insertAdjacentHTML('beforeEnd', htmlTemplate); //append html
const depElement = document.querySelector('#deposit_screen .deposit-card');
/*Append css*/
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = cssTemplate;
document.head.appendChild(styleSheet);

let scale = 1;
function scaleBlock() {
    if (window.innerWidth < 390) {
        scale = 1
    }
    else {
        scale = 1.05
    }

    let width = (divElement.offsetWidth / depElement.offsetWidth) / scale;

    depElement.style.transform = 'scale(' + (width) + ') ';
}
scaleBlock()

window.addEventListener('load', function (e) {
    scaleBlock()
})