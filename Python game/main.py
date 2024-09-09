import pygame
import time
import random
pygame.font.init()

# Set width, height, and title of the window
WIDTH, HEIGHT = 800, 800
WIN = pygame.display.set_mode((WIDTH, HEIGHT))  # Create a window of the specified size
pygame.display.set_caption("Space Dodge")  # Set the window title

# VARIABLES
BG = pygame.transform.scale(pygame.image.load("backgroundimage.png"), (WIDTH, HEIGHT))  # Load and scale the background image
PLAYER_WIDTH = 40
PLAYER_HEIGHT = 60
PLAYER_VEL = 5  # Player's velocity (speed)
STAR_WIDTH = 10
STAR_HEIGHT = 20
STAR_VEL = 3  # Stars' velocity (falling speed)

FONT = pygame.font.SysFont("comicsans", 30)  # Set the font and size for text display

#Draws the game elements on the screen.
def draw(player, elapsed_time, stars):
    WIN.blit(BG, (0, 0))  # Draw the background image

    # Render the elapsed time and display it on the screen
    time_text = FONT.render(f"Time {round(elapsed_time)}s", 1, "white")
    WIN.blit(time_text, (10, 10))

    # Draw the player as a red rectangle
    pygame.draw.rect(WIN, "red", player)

    # Draw each star as a white rectangle
    for star in stars:
        pygame.draw.rect(WIN, "white", star)
    
    pygame.display.update()  # Update the display to show the latest drawings

#Main function to run the game loop.
def main():
    run = True

    # Create the player rectangle
    player = pygame.Rect(200, HEIGHT - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT)
    
    clock = pygame.time.Clock()  # Initialize the clock for controlling the frame rate
    start_time = time.time()  # Record the start time
    elapsed_time = 0  # Initialize elapsed time

    star_add_increment = 2000  # Time interval to add new stars in milliseconds
    star_count = 0  # Counter to track time for adding stars

    stars = []  # List to hold star objects
    hit = False  # Flag to check if player has been hit by a star

    while run:
        star_count += clock.tick(60)  # Increment the star count based on the clock tick rate (60 FPS)
        elapsed_time = time.time() - start_time  # Calculate elapsed time

        # Add stars when the star count exceeds the increment threshold
        if star_count > star_add_increment:
            for _ in range(3):  # Add three stars at a time
                star_x = random.randint(0, WIDTH - STAR_WIDTH)  # Random x position for each star
                star = pygame.Rect(star_x, -STAR_HEIGHT, STAR_WIDTH, STAR_HEIGHT)  # Create star rectangle
                stars.append(star)  # Add the star to the list
            
            star_add_increment = max(200, star_add_increment - 50)  # Decrease interval time, minimum 200 ms
            star_count = 0  # Reset star count

        # Check for events like quitting the game
        for event in pygame.event.get():
            if event.type == pygame.QUIT:  # If the user clicks the close button
                run = False
                break
        
        # Check for key presses to move the player
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT] and player.x - PLAYER_VEL >= 0:  # Move left if within bounds
            player.x -= PLAYER_VEL
        if keys[pygame.K_RIGHT] and player.x + PLAYER_VEL + player.width <= WIDTH:  # Move right if within bounds
            player.x += PLAYER_VEL

        # Update the position of each star
        for star in stars[:]:
            star.y += STAR_VEL  # Move star down
            if star.y > HEIGHT:  # Remove stars that move off the screen
                stars.remove(star)
            elif star.y + star.height >= player.y and star.colliderect(player):  # Check for collision with player
                stars.remove(star)  # Remove the star upon collision
                hit = True  # Set hit flag to True
                break

        # If the player is hit, display "Game Over" and end the game
        if hit:
            lost_text = FONT.render("Game Over", 1, "white")  # Render the "Game Over" text
            WIN.blit(lost_text, (WIDTH/2 - lost_text.get_width()/2, HEIGHT/2 - lost_text.get_height()/2))  # Center the text
            pygame.display.update()  # Update display to show the text
            pygame.time.delay(4000)  # Pause for 4 seconds
            break
        
        draw(player, elapsed_time, stars)  # Draw everything on the screen

    pygame.quit()  # Properly quit pygame

# Calling the main function
if __name__ == "__main__":
    main()
