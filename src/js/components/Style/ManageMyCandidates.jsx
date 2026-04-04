import styled from 'styled-components';

import DesignTokenColors from '../../common/components/Style/DesignTokenColors';

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 575px) {
    padding-bottom: 72px;
  }
  border-collapse: separate;
  border-spacing: 0 10px;
`;

export const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  background: ${DesignTokenColors.neutralUI50};
  padding: 12px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.02);
`;

export const CardTopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const CardNameRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CardNameText = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const CardBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 12px;
`;

export const CardBadgeOk = styled.span`
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  color: #065f46;
  border-radius: 999px;
  padding: 2px 8px;
  font-weight: 700;

  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const CardBadgeNeutral = styled.span`
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  color: #374151;
  border-radius: 999px;
  padding: 2px 8px;
`;

export const CardActionsAndOpinion = styled.div`
  display: flex;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 575px) {
    flex: 1;
    align-items: stretch;
  }
  padding-bottom: 10px;
`;

export const CardInfoTitle = styled.div`
  color: ${DesignTokenColors.neutralUI500};
  margin-top: auto;
`;

export const CardInfoValue = styled.div`
  color: ${DesignTokenColors.neutralUI900};
  font-weight: strong;
  margin-top: auto;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 575px) {
    flex: 1;
    align-items: stretch;
  }
`;

export const CandidateLink = styled.button`
color: #2563eb;
text-decoration: none;
background: none;
border: none;
padding: 0;
cursor: pointer;
font: inherit;

&:hover {
  text-decoration: underline;
}
`;

export const VerticalBarWrapper = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  margin: ${(p) => (p.$tight ? "0 4px" : "0 12px")};
`;

export const VerticalBar = styled.div`
  width: 1px;
  height: 80%;
  background: #d1d5db;
  border-radius: 999px;
`;

export const ToolbarRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  margin-left: 12px;
`;

export const LeftTools = styled.div`
  display: flex;
  align-items: center;
`;

export const KebabBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: #6b7280;
  padding: 2px 6px;
  border-radius: 10px;

  &:hover {
    background: ${DesignTokenColors.neutralUI50};
  }
`;

