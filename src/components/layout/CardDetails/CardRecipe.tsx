import { useState } from "react";
import { Box, Card, List, ListItem, Typography } from "@mui/material";
import { RecipeProps } from "../../model/RecipeProps";

const CardRecipe: React.FC<RecipeProps> = ({
  title,
  timeToPrepare,
  ingredients,
  preparationMethod,
}: RecipeProps) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  return (
    <Card
      data-testid="ingredient-list-card"
      sx={{
        display: "flex",
        position: "relative",
        width: "294px",
        height: "700px",
        boxShadow: "2",
        borderRadius: 1,
        p: 2,
        mb: 3,
      }}
    >
      <Box data-testid="ingredient-list-card-container">
        <Typography
          data-testid="ingredient-list-title"
          fontWeight="bold"
          minWidth="262px"
          fontSize="24px"
          lineHeight="36px"
          paddingBottom="8px"
        >
          {title}
        </Typography>
        <Typography
          data-testid="ingredient-list-prep-time"
          variant="subtitle1"
          fontSize="17px"
          color="gray"
          lineHeight="24px"
          paddingBottom="24px"
        >
          {timeToPrepare}
        </Typography>
        <Box
          data-testid="ingredient-list-container"
          sx={{
            ml: 2.375,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <List
            data-testid="ingredient-list"
            sx={{
              listStyleType: " circle",
            }}
          >
            {ingredients.map((el, index) => (
              <ListItem
                data-testid="ingredient-list-item"
                sx={{
                  display: "list-item",
                  color: "gray",
                  pl: 0,
                  pt: 0,
                  lineHeight: "20px",
                }}
                key={`ingredient-index-${index}`}
              >
                <Typography
                  data-testid="ingredient-list-item-content"
                  variant="body1"
                >
                  {el}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      {showPopUp && (
        <Box
          data-testid="ingredient-list-pop-up-content"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 50,
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            data-testid="prep-list-background-container"
            sx={{
              backgroundColor: "black",
              position: "absolute",
              zIndex: 45,
              height: "100%",
              width: "100%",
              opacity: 0.75,
            }}
            onClick={() => setShowPopUp(false)}
          ></Box>

          <List
            data-testid="prep-list-container"
            sx={{
              backgroundColor: "white",
              p: 3,
              pb: 0,
              zIndex: 50,
              borderRadius: 1,
              maxWidth: "42%",
            }}
          >
            <Box
              data-testid="prep-list-close-btn-icon-container"
              sx={{
                position: "absolute",
                top: 0,
                right: "1px",
                paddingTop: "3.17px",
                paddingRight: "6.17px",
              }}
            >
              <button onClick={() => setShowPopUp(false)}>
                {<img src="./button-x-icon.png" alt="button-x-icon" />}
              </button>
            </Box>
            {preparationMethod.map(
              (el: { step: number; text: string }, index: number) => (
                <ListItem
                  data-testid="prep-list-item"
                  sx={{ display: "flex", alignItems: "center", pl: 0, pr: 0 }}
                  key={`preparation-method-index-${index}`}
                >
                  <Box
                    data-testid="prep-list-item-num-container"
                    sx={{
                      position: "absolute",
                      backgroundColor: "#3593E9",
                      padding: "12px",
                      paddingTop: 2,
                      margin: "15px",
                      width: "32px",
                      height: "32px",
                      left: " calc(1% - 32px/2)",
                      top: "calc(9% - 32px/2)",
                      borderRadius: "50%",
                    }}
                  >
                    <Typography
                      data-testid="prep-list-item-num-step-content"
                      lineHeight="0"
                      paddingRight="1px"
                      color="white"
                    >
                      {el.step}
                    </Typography>
                  </Box>
                  <Box
                    data-testid="prep-list-item-text-container"
                    sx={{
                      marginLeft: 6.5,
                      paddingBottom: 1,
                    }}
                  >
                    <Typography data-testid="prep-list-item-text-content">
                      {el.text}
                    </Typography>
                  </Box>
                </ListItem>
              )
            )}
          </List>
        </Box>
      )}
      <Box
        data-testid="prep-info-pop-up-btn-icon-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: 2,
        }}
      >
        <button onClick={() => setShowPopUp(true)}>
          <img src="./pop-up-icon.png" alt="pop-up-icon" />
        </button>
      </Box>
    </Card>
  );
};

export default CardRecipe;
