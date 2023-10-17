import React from "react";
import styled from "styled-components";

export default function GatheringItems({ groupData, joinGroupData }) {
    const GatheringItems = styled.li`
        width: 100px;
        padding: 10px;

        img {
            width: 100%;
            aspect-ratio: 1/1;
            border-radius: 10px;
        }
        strong {
            font-weight: bold;
        }
    `;

    function createGroups() {
        if (groupData) {
            groupData.map((item) => {
                return (
                    <GatheringItems key={item.id}>
                        <link href="/">
                            <img
                                src={
                                    item.img
                                        ? item.img
                                        : "http://placehold.it/100X100"
                                }
                                alt=""
                            />
                            <strong>{item.GroupTit}</strong>
                            <p>{item.explain}</p>
                        </link>
                    </GatheringItems>
                );
            });
        } else if (joinGroupData) {
            joinGroupData.map((item) => {
                return (
                    <GatheringItems key={item.id}>
                        <link href="/">
                            <img
                                src={
                                    item.img
                                        ? item.img
                                        : "http://placehold.it/100X100"
                                }
                                alt=""
                            />
                            <strong>{item.GroupTit}</strong>
                            <p>{item.explain}</p>
                        </link>
                    </GatheringItems>
                );
            });
        }
    }
    return (
        <>
            <createGroups />

            {/* <GatheringItems>
                <Link href="/">
                <img src="" alt="" />
                <strong>모임 이름</strong>
                <p>모임 설명</p>
                </Link>
            </GatheringItems> */}
        </>
    );
}
