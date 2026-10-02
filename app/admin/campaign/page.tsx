"use client";

import React, { useState } from "react";
import axios from "axios";
import { Layout } from "../../components/layout/Layout";
import * as A from "../DashBoard.styled";
import { Row, Col, Card, Form ,Button } from "react-bootstrap";

axios.defaults.withCredentials = true;

export default function AdoptionCampaignAdmin() {
  // 1.캠페인 등록을 위한 폼 상태관리
  const [formData, setFormData] = useState({
    hashtag: "",
    title: "",
    content: "",
    thumbnailUrl: "",
    mediaType: "IMAGE",
    mediaUrl: "",
  });

  /*
  유튜브 영상은 고유의 ID(11자리)만 뽑아내면
  유튜브 서버에서 제공하는 공식 썸네일 이미지 주소를 조합해서
  자동으로 가져올 수 있음
  */
  // url이라는 문자열(string)을 입력받는 함수를 선언
  const extractYoutubeId = (url: string) => {
    /*
    유튜브 URL의 다양한 패턴을 모두 잡아내는 정규식(규칙)을 만듦
    .*: 주소의 맨 처음(^)부터 시작해서 아무 글자(.*)나 있어도 일단 통과
    (youtu.be\/ | v\/ | embed\/ | watch\?v= | \&v=): [그룹 1]
    유튜브 주소는 형태가 아주 다양함(모바일용, 공유용, 퍼가기용 등)
    이 부분은 이런저런 글자 뒤에 나올 수 있는 패턴들을 나타냄
    [^#\&\?]*: 비디오 ID가 담기는 곳
    ^...: ...을 제외하고 하는 뜻
    해시태그(#)나 엠퍼샌드(&), 물음표(?)가 나오기 전까지의 모든
    글자를 캡쳐해서 그룹 2 에 저장하라는 뜻
    왜냐하면 유튜브 주소 뒤에 &t=30s(시간)같은
    꼬리표가 붙을 수 있는데
    이걸 잘라내고 순수 ID만 얻기 위해서
    */
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // 일반 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<any>) => {
    const {name, value} = e.target;
    setFormData((prev) => {
      const newData = {...prev, [name]: value};
      if (name === "mediaUrl" && newData.mediaType === "YOUTUBE") {
        const videoId = extractYoutubeId(value);
        if (videoId)
          newData.thumbnailUrl = `
            https://img.youtube.com/vi/${videoId}/hqdefault.jpg
          `;
      };
      return newData;
    });
  };
  // 미디어 타입(라디오 버튼) 변경 핸들러
  const handleMediaTypeChange = (type: string) => {
    // 타입이 바뀌면 기존 영상 주소 초기화
    setFormData(prev => ({...prev, mediaType: type, mediaUrl: ""}));
  };
  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/campaigns", formData);
      alert(response.data.message || "입양 캠페인이 성공적으로 등록되었습니다!");
      // 등록 성공 후 폼 깨끗하게 비우기
      setFormData({
        hashtag: "",
        title: "",
        content: "",
        thumbnailUrl: "",
        mediaType: "IMAGE",
        mediaUrl: "",
      });
    } catch (err: any) {
      console.error("등록 에러: ", err);
      if (err.response?.status === 401)
        alert("등록 권한이 없습니다. 관리자로 로그인 해주세요.");
      else
        alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    };
  };

  const HASHTAG_LIST = [
    "#제주입양",
    "#임시보호",
    "#치료지원",
    "#입양홍보",
    "#구조스토리"
  ];

  return (
    <Layout>
      <A.PageHeader>
        <h1 className="h3 mb-0 text-gray-800">
          입양 캠페인 관리
        </h1>
      </A.PageHeader>
      <A.GridRow>
        <Col lg={8}>
          <Card className="shadow mb-4 border-left-primary">
            <Card.Header className="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                신규 캠페인 등록
              </h6>
            </Card.Header>

            <Card.Body>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label className="font-weight-bold text-gray-800">
                    미디어 타입 설정
                  </label>
                  <div className="d-flex gap-3 mt-2">
                    <div className="custom-control custom-radio mr-3">
                      <Form.Check
                      type="radio"
                      id="mediaImage"
                      name="mediaType"
                      className="custom-control-input"
                      checked={formData.mediaType === "IMAGE"}
                      onChange={() => handleMediaTypeChange("IMAGE")}/>
                      <label
                      className="custom-control-label"
                      htmlFor="mediaImage">
                        이미지형
                      </label>
                    </div>
                    <div className="custom-control custom-radio mr-3">
                      <Form.Check
                      type="radio"
                      id="mediaYoutube"
                      name="mediaType"
                      className="custom-control-input"
                      checked={formData.mediaType === "YOUTUBE"}
                      onChange={() => handleMediaTypeChange("YOUTUBE")}/>
                      <label
                      className="custom-control-label"
                      htmlFor="mediaYoutube">
                        유튜브 링크형
                      </label>
                    </div>
                    <div className="custom-control custom-radio mr-3">
                      <Form.Check
                      type="radio"
                      id="mediaDirect"
                      name="mediaType"
                      className="custom-control-input"
                      checked={formData.mediaType === "DIRECT_VIDEO"}
                      onChange={() => handleMediaTypeChange("DIRECT_VIDEO")}/>
                      <label
                      className="custom-control-label"
                      htmlFor="mediaDirect">
                        서버 직접 업로드형
                      </label>
                    </div>
                  </div>
                </div>

                <hr/>

                {/* 해시태그 및 제목 입력 구역 */}
                <Row>
                  <Col md={4} className="form-group mb-3">
                    <label className="font-weight-bold">
                      해시태그(말머리)
                    </label>
                    <Form.Select
                    name="hashtag"
                    value={formData.hashtag}
                    onChange={handleChange}
                    required>
                      <option value="">--필수 선택--</option>
                      {HASHTAG_LIST.map((tag, idx) => (
                        <option key={idx} value={tag}>
                          {tag}
                        </option>
                      ))}
                      {/* <option value="">--필수 선택--</option>
                      <option value="#제주입양">--필수 선택--</option>
                      <option value="#임시보호">--필수 선택--</option>
                      <option value="">--필수 선택--</option> 잘못된 방법 */}
                    </Form.Select>
                  </Col>
                  <Col md={8} className="form-group mb-3">
                    <label className="font-weight-bold">
                      캠페인 제목
                    </label>
                    <Form.Control
                    name="title"
                    placeholder="목록에 노출될 제목을 적어주세요"
                    value={formData.title}
                    onChange={handleChange}
                    required/>
                  </Col>
                </Row>

                {/* 상세 내용 구역 */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">
                    상세 내용
                  </label>
                  <Form.Control
                  as="textarea"
                  rows={5}
                  name="content"
                  placeholder="캠페인의 자세한 사연이나 설명을 적어주세요"
                  value={formData.content}
                  onChange={handleChange}
                  required/>
                </div>

                {/* 동영상 링크 / 경로 */}
                {formData.mediaType !== "IMAGE" && (
                  <div className="form-group mb-3 p-3 bg-light rounded">
                    <label className="font-weight-bold text-primary">
                      {formData.mediaType === "YOUTUBE" ?
                      "유튜브 링크(URL)" : "서버 동영상 파일 경로"}
                    </label>
                    <Form.Control
                    type="text"
                    name="mediaUrl"
                    placeholder={
                      formData.mediaType === "YOUTUBE" ?
                      "https://youtube.com/.." :
                      "/uploads/videos/campaign"
                    }
                    value={formData.mediaUrl}
                    onChange={handleChange}
                    required={formData.mediaType !== "IMAGE"}/>
                  </div>
                )}

                {/* 썸네일 구역 */}
                <div className="form-group mb-4">
                  <label className="font-weight-bold">
                    썸네일 이미지 URL(최대 2MB)
                  </label>
                  <Form.Control
                  type="url"
                  name="thumbnailUrl"
                  placeholder="목록에 보여질 썸네일 주소를 입력하세요"
                  value={formData.thumbnailUrl}
                  onChange={handleChange}
                  required/>
                </div>
                {/* 썸네일 미리보기 */}
                {formData.thumbnailUrl && (
                  <div className="mb-4 text-center">
                    <img
                    src={formData.thumbnailUrl}
                    alt="썸네일 미리보기"/>
                  </div>
                )}
                <Button
                type="submit"
                variant="primary"
                className="btn-block">
                  캠페인 최종 등록하기
                </Button>
              </form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow mb-4">
            <Card.Header className="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                등록 안내 가이드
              </h6>
            </Card.Header>
            <Card.Body className="text-gray-800">
              <p>
                <strong>1.해시태그(말머리) 필수</strong><br/>
                말머리를 정확히 선택해야 사용자 페이지에서 해당 카테고리로
                묶여서 노출됩니다.
              </p>
              <hr/>
              <p>
                <strong>2.유튜브 링크 활용</strong><br/>
                서버 트래픽 절감 및 원활한 스트리밍을 위해
                가급적 유튜브 링크 연동을 권장합니다.
                상세 페이지에서 Iframe으로 노출됩니다.
              </p>
              <hr/>
              <p>
                <strong>3.직접 동영상 업로드 시 주의</strong><br/>
                외부 통제가 불가능한 상황을 대비한 기능입니다.
                트래픽 폭주를 막기위해 최대 2MB 용량, 30초 이내의 ogg 또는
                mp4 파일로 변환하여 업로드
              </p>
            </Card.Body>
          </Card>
        </Col>
      </A.GridRow>
    </Layout>
  );
};