FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY . .
RUN chmod +x mvnw && ./mvnw clean package -f FoodDelivery_Application_APIs/pom.xml
CMD ["java", "-jar", "FoodDelivery_Application_APIs/target/*.jar"]git