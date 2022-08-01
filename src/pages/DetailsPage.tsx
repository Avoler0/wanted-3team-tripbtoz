import styled from 'styled-components';
import { theme } from '../styles/theme';

export default function DetailsPage() {
  return (
    <Container>
      <Content>
        <HotelInformation>
          <HotelImage src="/images/hotel.jpg" alt="hotel" />
          <HotelIntroduction>
            <HotelClassification>4.0성급</HotelClassification>
            <HotelName>호텔</HotelName>
            <HotelAddress>서울시 강남구 테헤란로 415, L7빌딩</HotelAddress>
          </HotelIntroduction>
        </HotelInformation>
        <RoomInformation>
          <RoomTypeContainer>
            <RoomTypeInformation>
              <RoomType>Room</RoomType>
              <Occupancy>기준 2인 | 최대 2인</Occupancy>
            </RoomTypeInformation>
            <RoomImage src="/images/room.jpg" alt="hotel" />
          </RoomTypeContainer>
          <ReservationContainer>
            <div>
              <HotelRate>
                <Night>1박</Night>
                100,000 원
              </HotelRate>
              <ReservationButton>예약</ReservationButton>
            </div>
          </ReservationContainer>
        </RoomInformation>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  padding: 1rem 0;
  background-color: ${theme.onHoverBackgroundColor};

  @media screen and (max-width: 1024px) {
    background-color: white;
  }
`;

const Content = styled.div`
  width: 976px;
  margin: 0 auto;
  background-color: ${theme.onHoverBackgroundColor};

  @media screen and (max-width: 1024px) {
    width: 768px;
    display: block;
    box-shadow: rgb(153 153 153) 0px 10px 55px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HotelInformation = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const HotelImage = styled.img`
  width: 588px;
  height: 359px;
  display: block;
  object-fit: cover;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const HotelIntroduction = styled.div`
  width: 378px;
  height: 173px;
  padding: 1.5rem 1rem;
  background-color: white;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const HotelClassification = styled.span`
  padding: 0.05rem 0.25rem;
  font-size: 0.75rem;
  border: 1px solid ${theme.fontDarkColor};
  border-radius: 2px;
  font-weight: 500;
`;

const HotelName = styled.div`
  margin-top: 1rem;
  color: ${theme.fontDarkColor};
  font-size: 1.25rem;
  font-weight: 500;
`;

const HotelAddress = styled.div`
  margin-top: 0.5rem;
  font-size: 0.7rem;
  color: ${theme.fontLightColor};
`;

const RoomInformation = styled.div`
  width: 588px;
  margin-top: 0.5rem;
  padding: 24px;
  background-color: white;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const RoomImage = styled.img`
  width: 245px;
  height: 130px;
  border-radius: 4px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 36.1111vw;
  }
`;

const RoomTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const RoomTypeInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 457px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const RoomType = styled.div`
  font-weight: 700;
`;

const Occupancy = styled.div`
  font-size: 0.8rem;
  color: ${theme.fontLightColor};
`;

const ReservationContainer = styled.div`
  margin-top: 0.8rem;
  padding: 0.9rem;
  display: flex;
  justify-content: end;
  border: 1px solid ${theme.borderColor};
`;

const HotelRate = styled.div`
  display: flex;
  font-weight: 800;
`;

const Night = styled.span`
  font-weight: normal;
  font-size: 0.8rem;
  margin-right: 0.3rem;
`;

const ReservationButton = styled.button`
  color: white;
  background-color: ${theme.primaryColor};
  border: none;
  padding: 0.5rem 2.5rem;
  margin-top: 0.6rem;
  border-radius: 4px;
`;
