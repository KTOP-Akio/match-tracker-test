import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './components/Card';
import Loading from './assets/Refresh.png';
import Error from './assets/alert-triangle.png';

function MatchTracker() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://app.ftoyd.com/fronttemp-service/fronttemp');
      setData(response.data.data.matches);
      setError();
      setIsLoading(false);
    } catch (error) {
      setError("Ошибка: не удалось загрузить информацию");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Match Tracker</Title>
        <ButtonSection>
          {error ? 
            <ErrorSection>
              <img src={Error} alt="" />
              <span>Ошибка: не удалось загрузить информацию</span>
            </ErrorSection>
            :
            <></>
          }
          <Button onClick={fetchData}>
            {isLoading ? 
              "" : "Обновить"
            }
            <img src={Loading} alt="" />
          </Button>
        </ButtonSection>
      </Header>
      <DetailSection>
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </DetailSection>
    </Container>
  );
}

const Container = styled.div`
  background-color: #06080C;
  color: white;
  padding: 42px;
`
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 60px;
  align-items: center;
`
const Title = styled.span`
  font-family: 'Arial', sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 32px;
  line-height: 32px;
`
const ButtonSection = styled.div`
  display: flex;
  gap: 12px;
`
const Button = styled.button`
  padding: 15px 40px;
  width: 204px;
  border-radius: 4px;
  gap: 10px;
  outline: none;
  border: none;
  background-color: #EB0237;
  font-weight: 600;
  font-size: 18px;
  line-height: 21.78px;
  color: white;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`
const ErrorSection = styled.div`
  background-color: #0F1318;
  padding: 14px 24px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  gap: 10px;
`
const DetailSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`
export default MatchTracker;
