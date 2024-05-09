const express = require('express');
const app = express();
const PORT = 3001;

const flag = "CEITSEC{C_E_I_T_C_Y_B_E_R_S_E_C_U_R_I_T_Y}"


app.get('', (req, res) => {
    res.send("you can't se me but i can see you 55555+, behind you");
});

app.delete('/', (req, res) => {
    res.send(flag)
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
