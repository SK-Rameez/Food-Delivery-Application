FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY FoodDelivery_Application_APIs .
RUN chmod +x mvnw
RUN ./mvnw clean package
CMD ["java", "-jar", "target/FoodDelivery_Application_APIs-*.jar"]