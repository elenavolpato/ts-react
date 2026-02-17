import { useEffect, useState } from "react"
import type { NewsItem } from "../types"
import { Card, Col, Container, Row } from "react-bootstrap"

const newsURL = "https://api.spaceflightnewsapi.net/v4/articles"

type NewsResponse = {
  results: NewsItem[]
}

const NewsCards = () => {
  const [error, setError] = useState(false)
  const [newsData, setNewsData] = useState<NewsResponse | null>(null)

  const getNewsData = () => {
    fetch(newsURL)
      .then((res) => {
        if (res.ok) return res.json()
      })
      .then((newsFetched) => {
        console.log("success", newsFetched)
        setNewsData(newsFetched)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })
  }

  useEffect(() => {
    getNewsData()
  }, [])
  return (
    <>
      <Container>
        <Row>
          {newsData &&
            newsData.results.map((newsItem) => (
              <Col xs={3}>
                <Card key={newsItem.id}>
                  <div>{newsItem.title}</div>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  )
}

export default NewsCards
