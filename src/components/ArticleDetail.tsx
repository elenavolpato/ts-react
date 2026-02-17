import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { NewsItem } from "../types"
import { Button, Col, Container, Row } from "react-bootstrap"
import Loading from "./Loading"
import ErrorAlert from "./ErrorAlert"

const ArticleDetail = () => {
  const { id } = useParams()
  const [details, setDetails] = useState<NewsItem | null>(null)
  const navigate = useNavigate()

  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getArticleDetail = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => {
        if (res.ok) return res.json()
        else {
          throw new Error("Error in fetching data")
        }
      })
      .then((fetchedDetails) => {
        setDetails(fetchedDetails)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
        setIsLoading(false)
      })
  }
  console.log(details)
  useEffect(() => {
    getArticleDetail()
  }, [id])

  return (
    <Container className="py-5">
      {isLoading && !details && <Loading />}
      {error && <ErrorAlert />}

      {!isLoading && details && (
        <>
          <Button
            variant="outline-secondary"
            className="mb-4"
            onClick={() => navigate("/")}
          >
            ← Back
          </Button>

          <Row>
            <Col
              md={8}
              className="mx-auto"
            >
              <p className="text-secondary small text-uppercase mb-1">
                {details.news_site}
              </p>
              <h1 className="mb-3">{details.title}</h1>

              <div className="d-flex gap-1 text-secondary small mb-4">
                <span className="fw-bolder">{details.authors[0]?.name} </span> |{" "}
                <span>
                  {new Date(details.published_at).toLocaleDateString()}
                </span>
              </div>

              <div
                style={{
                  backgroundImage: `url(${details.image_url})`,
                }}
                className="mb-4 article-img"
              />

              <p className="lh-lg">{details.summary}</p>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default ArticleDetail
