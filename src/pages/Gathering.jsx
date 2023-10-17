import React from "react";
import styled from "styled-components";
import GatheringItems from "../components/Gathering/GatheringItems";

export default function Gathering() {
    const groupData = "";

    const joinGroupData = "";

    const GroupSection = styled.section`
        height: 100%;
        border: 1px solid gray;
        padding: 20px;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    `;

    const DivLine = styled.div`
        width: 80%;
        border: 1px solid gray;
        margin: 30px auto 10px;
    `;

    const GroupArticle = styled.article`
        height: 30%;
        text-align: center;

        h3 {
            color: orange;
        }
    `;

    const GatheringUl = styled.ul`
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 10px;
    `;

    return (
        <>
            <GroupSection>
                <h2 className="a11y-hidden">모임 페이지</h2>
                <DivLine />
                <GroupArticle>
                    <h3>추천 모임</h3>
                    {/* 리스트를 어떻게 뽑을지를 고민해보고 넣을지 결정하는게 좋을 것 같아요. */}
                    <GatheringUl />
                </GroupArticle>
                <DivLine />

                <GroupArticle>
                    <h3>참여하고 있는 모임</h3>
                    {joinGroupData ? (
                        <GatheringUl>
                            <GatheringItems joinGroupData={joinGroupData} />
                        </GatheringUl>
                    ) : (
                        <strong>현재 참여하고 있는 그룹이 없습니다.</strong>
                    )}
                </GroupArticle>
                <DivLine />

                <GroupArticle>
                    <h3>모임 전체 보기</h3>
                    <GatheringUl>
                        {groupData ? (
                            <GatheringItems groupData={groupData} />
                        ) : (
                            <strong>
                                현재 참여할 수 있는 모임이 없습니다.
                            </strong>
                        )}
                    </GatheringUl>
                </GroupArticle>
            </GroupSection>
        </>
    );
}
