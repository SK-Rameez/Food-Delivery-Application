# Builder stage
FROM eclipse-temurin:17-jdk AS builder
WORKDIR /app
COPY FoodDelivery_Application_APIs/ ./FoodDelivery_Application_APIs/
WORKDIR /app/FoodDelivery_Application_APIs
RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /app/FoodDelivery_Application_APIs/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]
