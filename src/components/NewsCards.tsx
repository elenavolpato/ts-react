import { useEffect, useState } from "react"
import type { NewsItem } from "../types"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Loading from "./Loading"
import ErrorAlert from "./ErrorAlert"

const newsURL = "https://api.spaceflightnewsapi.net/v4/articles"

const NewsCards = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [newsData, setNewsData] = useState<NewsItem[] | null>(null)
  const navigate = useNavigate()

  const getNewsData = () => {
    fetch(newsURL)
      .then((res) => {
        if (res.ok) return res.json()
        else {
          throw new Error("Error in fetching data")
        }
      })
      .then((newsFetched) => {
        console.log("success", newsFetched)
        setNewsData(newsFetched.results)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getNewsData()
  }, [])
  return (
    <>
      <Container className="cards-container">
        <Row className="justify-content-center">
          {isLoading && !newsData && <Loading />}
          {error && <ErrorAlert />}
          {newsData &&
            !isLoading &&
            newsData.map((newsItem) => (
              <Col
                xs={4}
                key={newsItem.id}
              >
                <Card
                  className="mb-3 p-0"
                  style={{ minHeight: "420px" }}
                >
                  <Card.Img
                    variant="top"
                    src={newsItem.image_url}
                    className="card-img-fixed"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between ">
                    <Card.Title>{newsItem.title}</Card.Title>
                    <Card.Subtitle className="pb-3">
                      {newsItem.authors[0]?.name}
                    </Card.Subtitle>

                    <Button
                      variant="primary"
                      onClick={() => navigate(`/article/${newsItem.id}`)}
                      className="pointer w-50 align-self-center"
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  )
}

export default NewsCards
