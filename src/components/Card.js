import React, { useState } from "react";
import styled from "styled-components";
import TeamLogo from "../assets/illustrations_role.png";
import Avatar from "../assets/avatar_global.png";
import ArrowUp from "../assets/chevron-up.png";
import ArrowDown from "../assets/arrow drop-list down.png";

function Card({ data }) {
    const [active, setActive] = useState(false);
    function toggleAccordion() {
        setActive(!active);
    }

    return (
        <AccordionSection>
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
                    {active ? 
                        <Arrow onClick={toggleAccordion}>
                            <img src={ArrowUp} alt="" />
                        </Arrow>
                        :
                        <Arrow onClick={toggleAccordion}>
                            <img src={ArrowDown} alt="" />
                        </Arrow>
                    }
                </TeamSection>
            </Container>
            {active ?
                <Content>
                    <TeamContent>
                        <PlayerSection>
                            {data.homeTeam.players.map((player, index) => (
                                <PlayerDetail key={index}>
                                    <Details>
                                        <img src={Avatar} alt="" />
                                        <span>{player.username}</span>
                                    </Details>
                                    <Details>
                                        <DetailKeys>Убийств:</DetailKeys>
                                        <span>{player.kills}</span>
                                    </Details>
                                </PlayerDetail>
                            ))}
                        </PlayerSection>
                        <ScoreDetail>
                            <ScoreDetailSection>
                                <DetailKeys>Points:</DetailKeys>
                                <span>{data.homeTeam.points}</span>
                            </ScoreDetailSection>
                            <ScoreDetailSection>
                                <DetailKeys>Место:</DetailKeys>
                                <span>{data.homeTeam.place}</span>
                            </ScoreDetailSection>
                            <ScoreDetailSection>
                                <DetailKeys>Всего убийств:</DetailKeys>
                                <span>{data.homeTeam.total_kills}</span>
                            </ScoreDetailSection>
                        </ScoreDetail>
                    </TeamContent>
                    <TeamContent>
                    <PlayerSection>
                            {data.awayTeam.players.map((player, index) => (
                                <PlayerDetail key={index}>
                                    <Details>
                                        <img src={Avatar} alt="" />
                                        <span>{player.username}</span>
                                    </Details>
                                    <Details>
                                        <DetailKeys>Убийств:</DetailKeys>
                                        <span>{player.kills}</span>
                                    </Details>
                                </PlayerDetail>
                            ))}
                        </PlayerSection>
                        <ScoreDetail>
                            <ScoreDetailSection>
                                <DetailKeys>Points:</DetailKeys>
                                <span>{data.awayTeam.points}</span>
                            </ScoreDetailSection>
                            <ScoreDetailSection>
                                <DetailKeys>Место:</DetailKeys>
                                <span>{data.awayTeam.place}</span>
                            </ScoreDetailSection>
                            <ScoreDetailSection>
                                <DetailKeys>Всего убийств:</DetailKeys>
                                <span>{data.awayTeam.total_kills}</span>
                            </ScoreDetailSection>
                        </ScoreDetail>
                    </TeamContent>
                </Content>
                :
                <></>
            }
        </AccordionSection>
    );
}

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0B0E12;
    border-radius: 4px;
    block-size: auto;
`
const Container = styled.div`
    color: white;
    height: 87px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    block-size: auto;
`
const Content = styled.div`
    padding: 28px;
    block-size: auto;
    display: flex;
    gap: 32px;
    justify-content: space-between;
`
const TeamContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`
const PlayerSection = styled.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;
`
const PlayerDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #101318;
    border-radius: 4px;
    padding: 8px 24px;
    block-size: auto;
    width: 100%
`
const Details = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`
const DetailKeys = styled.span`
    color: #FAFAFA66;
    opacity: 0.4;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
`
const ScoreDetail = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #101318;
    border-radius: 4px;
    padding: 14px 24px;
    block-size: auto;
`
const ScoreDetailSection = styled.div`
    display: flex;
    gap: 8px;
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
const Arrow = styled.div`
    width: 28px;
    height: 28px;
    margin-left: -2px;
    cursor: pointer;
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