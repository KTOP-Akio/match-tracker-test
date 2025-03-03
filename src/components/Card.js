import React from "react";
import styled from "styled-components";
import TeamLogo from "../assets/illustrations_role.png";

function Card({data}) {
    return (
        <Container>
            <TeamSection>
                <Logo>
                    <img src={TeamLogo} alt="" />
                </Logo>
                <Text>{data.awayTeam.name}</Text>
            </TeamSection>
            <DetailSection>
                <Score>{data.awayScore} : {data.homeScore}</Score>
                <Status status={data.status}>
                    <StatusDetail>{data.status}</StatusDetail>
                </Status>
            </DetailSection>
            <TeamSection>
                <Text>{data.homeTeam.name}</Text>
                <Logo>
                    <img src={TeamLogo} alt="" />
                </Logo>
            </TeamSection>
        </Container>
    );
}

const Container = styled.div`
    background-color: #0B0E12;
    color: white;
    height: 87px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 36px;
    block-size: auto;
`
const TeamSection = styled.div`
    gap: 14px;
    display: flex;
    align-items: center;
`
const Text = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 19.36px;
`
const Logo = styled.div`
    width: 48px;
    height: 48px;
`
const DetailSection = styled.div`
    width: 92px;
    height: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`
const Score = styled.span`
    font-weight: 600;
    font-size: 20px;
    line-height: 24.2px;
`
const Status = styled.div`
    width: 92px;
    height: 27px;
    border-radius: 4px;
    padding 6px 2px;
    background-color: ${(props) => (props.status === "Ongoing" ? "#43AD28" : (props.status === "Finished" ? "#EB0237" : "#EB6402"))};
    display: flex;
    justify-content: center;
    align-items: center;
`
const StatusDetail = styled.span`
    font-weight: 600;
    font-size: 12px;
    line-height: 14.52px;
`
export default Card;