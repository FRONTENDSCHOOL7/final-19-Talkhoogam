import React, { useRef } from "react";
import sampleBook from "../../assets/images/sample_book.jpg";
import sampleBook2 from "../../assets/images/슈독.jfif";
import {
  GroupUlProto,
  GroupLiProto,
  GroupArticleProto,
  BtnScrollHandler,
  ContainerProto,
  MoreIcon,
} from "../../styles/GatheringStyled";
import moreIcon from "../../assets/icons/angle-small-right.svg";

export function SampleList() {
  return <div>SampleList</div>;
}

function alertInfo() {
  alert("현재 페이지는 프로토타입 페이지입니다.");
}

function SampleItems() {
  return (
    <button onClick={alertInfo}>
      <img
        className="post-thumbnail"
        src={sampleBook}
        alt="추천하는 모임 게시글의 대표 이미지"
      />
      <strong className="post-tit">독서하는 사람 모임</strong>
      <p className="post-info">너굴사장님</p>
    </button>
  );
}

function SampleItems2() {
  return (
    <button onClick={alertInfo}>
      <img
        className="post-thumbnail"
        src={sampleBook2}
        alt="추천하는 모임 게시글의 대표 이미지"
      />
      <strong className="post-tit">청춘 모임</strong>
      <p className="post-info">너굴사장님</p>
    </button>
  );
}
// 참여 모임 : JoinedGroups
export function JoinedGroups() {
  return (
    <ContainerProto>
      <GroupArticleProto className="joinedList">
        <div className="group-tit-more">
          <h3>참여하고 있는 모임</h3>
          <a href="javascirpt:void(0);" onClick={alertInfo}>
            <MoreIcon src={moreIcon} alt="더보기 아이콘" />
          </a>
        </div>
        <GroupUlProto>
          <GroupLiProto>
            <SampleItems />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems2 />
          </GroupLiProto>
        </GroupUlProto>
      </GroupArticleProto>
    </ContainerProto>
  );
}

// 추천 모임 : RecommendedGroups
export function RecommendedGroups() {
  const RecommendedRef = useRef(null);
  const btnScrollLeftRef = useRef(null);
  const btnScrollRightRef = useRef(null);

  function handleScrollLeft() {
    RecommendedRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  }
  function handleScrollRight() {
    RecommendedRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  }
  return (
    <ContainerProto>
      <GroupArticleProto>
        <div className="group-tit-more">
          <h3>추천하는 모임</h3>
          <a href="javascirpt:void(0);" onClick={alertInfo}>
            <MoreIcon src={moreIcon} alt="더보기 아이콘" />
          </a>
        </div>
        <GroupUlProto className="recommendedList" ref={RecommendedRef}>
          <GroupLiProto>
            <SampleItems />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems2 />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems2 />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems />
          </GroupLiProto>
        </GroupUlProto>
      </GroupArticleProto>
      <BtnScrollHandler
        ref={btnScrollLeftRef}
        className="left"
        onClick={handleScrollLeft}
      ></BtnScrollHandler>
      <BtnScrollHandler
        ref={btnScrollRightRef}
        className="right"
        onClick={handleScrollRight}
      ></BtnScrollHandler>
    </ContainerProto>
  );
}

// 전체 모임 : AllGroups
export function AllGroups() {
  const allListRef = useRef(null);
  const btnScrollLeftRef = useRef(null);
  const btnScrollRightRef = useRef(null);

  function handleScrollLeft() {
    allListRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  }
  function handleScrollRight() {
    allListRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  }

  return (
    <ContainerProto>
      <GroupArticleProto>
        <div className="group-tit-more">
          <h3>모임 전체보기</h3>
          <a href="javascirpt:void(0);" onClick={alertInfo}>
            <MoreIcon src={moreIcon} alt="더보기 아이콘" />
          </a>
        </div>
        <GroupUlProto className="allList" ref={allListRef}>
          <GroupLiProto>
            <SampleItems />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems2 />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems2 />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems2 />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems2 />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems2 />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems />
          </GroupLiProto>
          <GroupLiProto>
            <SampleItems2 />
          </GroupLiProto>
        </GroupUlProto>
      </GroupArticleProto>
      <BtnScrollHandler
        ref={btnScrollLeftRef}
        className="left"
        onClick={handleScrollLeft}
      ></BtnScrollHandler>
      <BtnScrollHandler
        ref={btnScrollRightRef}
        className="right"
        onClick={handleScrollRight}
      ></BtnScrollHandler>
    </ContainerProto>
  );
}
