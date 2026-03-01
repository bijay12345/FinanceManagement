import api from "../../api";


const addTransaction = async (amount: number) => {
    const data = await api.post("/transaction", { amount });
    return data;
};

const getTransactions = async () => {
    const data = api.get("/transaction");
    return data;
};

export { addTransaction, getTransactions };