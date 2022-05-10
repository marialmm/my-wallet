import styled from "styled-components";

function Transaction({ transaction }) {
    return (
        <Container color={transaction.type}>
            <p>
                <span>{transaction.date}</span> {transaction.description}
            </p>
            <p class="value">{transaction.value.toFixed(2)}</p>
        </Container>
    );
}

const Container = styled.div`
    p span {
        color: var(--ligth-grey);
        margin-right: 5px;
    }
    p.value {
        color: var(--${(props) => props.color});
    }
`;

export default Transaction;
